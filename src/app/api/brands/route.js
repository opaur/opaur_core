import { supabase } from "@/utils/supabaseClient";
import { authenticateRequest } from "@/utils/auth";

export async function GET(request) {
  if (!supabase) {
    return new Response(JSON.stringify({ error: 'Supabase no está configurado correctamente' }), {
      status: 500,
    });
  }
  const { error, user } = await authenticateRequest(request);
  if (error) return error; // Retorna el error directamente si falla la autenticación

  const { searchParams } = new URL(request.url);
  const user_id = searchParams.get("user_id");

  const { data, error: dbError } = await supabase
    .from("brands_users")
    .select("*, brand:brands(*,category:brands_industries(*))")
    .eq("user_id", user_id);

  if (dbError) {
    return new Response(JSON.stringify({ error: dbError.message }), {
      status: 500,
    });
  }

  return new Response(JSON.stringify(data), { status: 200 });
}

export async function POST(request) {
  try {
    if (!supabase) {
      return new Response(JSON.stringify({ error: 'Supabase no está configurado correctamente' }), {
        status: 500,
      });
    }

    // Corregido: Usamos correctamente `error_auth`
    const { error: error_auth, user } = await authenticateRequest(request);
    if (error_auth) {
      return new Response(JSON.stringify({ error: error_auth.message }), { status: 401 });
    }

    const body = await request.json();
    const { name, industry_id, brand_properties, user_id } = body;

    if (!name || !industry_id) {
      return new Response(JSON.stringify({ error: "The name and industry_id fields are required" }), {
        status: 400,
      });
    }

    // Insertar en `brands`
    const { data, error } = await supabase
      .from("brands")
      .insert([{ name, industry_id, brand_properties: brand_properties || {} }])
      .select("id");

    if (error || !data?.length) {
      return new Response(JSON.stringify({ error: "Error inserting brand", details: error?.message }), {
        status: 500,
      });
    }

    const brand_id = data[0].id;

    // Insertar en `brands_users`
    const { error: error_brand_user } = await supabase
      .from("brands_users")
      .insert([{ user_id, brand_id, is_brand_owner: true }]);

    if (error_brand_user) {
      await supabase.from("brands").delete().eq("id", brand_id);
      return new Response(JSON.stringify({ error: "Error inserting brand", details: error_brand_user.message }), {
        status: 500,
      });
    }

    return new Response(JSON.stringify({ message: "Brand created", id: brand_id }), { status: 201 });

  } catch (err) {
    return new Response(JSON.stringify({ error: "Error. " + err.message }), { status: 500 });
  }
}
