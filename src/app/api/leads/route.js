import { supabase } from "@/utils/supabaseClient";

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, metadata } = body;

    // Validar los campos requeridos
    if (!email || !metadata) {
      return new Response(
        JSON.stringify({
          error: "The email and metadata fields are required",
        }),
        {
          status: 400,
        },
      );
    }

    // Insertar los datos en la tabla `leads`
    const { data, error } = await supabase
      .from("leads")
      .insert([
        {
          email,

          metadata: metadata || {}, // JSONB opcional
        },
      ])
      .select("*");

    // Validar la respuesta de Supabase
    if (error || !data || data.length === 0) {
      return new Response(
        JSON.stringify({
          error: "Error inserting lead",
          details: error.message,
        }),
        {
          status: 500,
        },
      );
    }

    // Respuesta exitosa
    return new Response(
      JSON.stringify({ message: "Lead created", lead: data }),
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
