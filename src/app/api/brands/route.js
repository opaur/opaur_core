import { supabase } from "@/utils/supabaseClient";

export async function GET(request) {
  if (!supabase) {
    return new Response(
      JSON.stringify({ error: "Supabase no está configurado correctamente" }),
      {
        status: 500,
      },
    );
  }
  const { searchParams } = new URL(request.url);
  const user_id = searchParams.get("user_id");
  const { data, error } = await supabase
    .from("brands_users")
    .select("*, brand:brands(*,category:brands_categories(*))")
    .eq("user_id", user_id);

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }

  return new Response(JSON.stringify(data), {
    status: 200,
  });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, industry_id, brand_properties, user_id } = body;

    // Validar los campos requeridos
    if (!name || !category_id) {
      return new Response(
        JSON.stringify({
          error: "The name and category_id fields are required",
        }),
        {
          status: 400,
        },
      );
    }

    // Insertar los datos en la tabla `brands`
    const { data, error } = await supabase
      .from("brands")
      .insert([
        {
          name,
          industry_id,
          brand_properties: brand_properties || {}, // JSONB opcional
        },
      ])
      .select("id"); // Seleccionar solo el ID generado

    // Validar la respuesta de Supabase
    if (error || !data || data.length === 0) {
      return new Response(
        JSON.stringify({
          error: "Error inserting brand",
          details: error.message,
        }),
        {
          status: 500,
        },
      );
    }

    const brand_id = data[0].id;
    // Insertar la nueva marca
    const { data_brand_user, error_brand_user } = await supabase
      .from("brands_users")
      .insert([
        {
          user_id,
          brand_id,
          is_brand_owner: true,
        },
      ])
      .select("brand_id");
    // Manejar errores en la inserción
    if (error_brand_user) {
      await supabase.from("brands").delete().eq("id", brand_id);
      return new Response(
        JSON.stringify({
          error: "Error inserting brand",
          details: error_brand_user.message,
        }),
        {
          status: 500,
        },
      );
    }

    // Respuesta exitosa
    return new Response(
      JSON.stringify({ message: "Brand created", id: brand_id }),
      {
        status: 201,
      },
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: "Error. " + err }), {
      status: 500,
    });
  }
}
