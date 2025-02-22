import { supabase } from "@/utils/supabaseClient";
const allowedOrigins = ["https://www.opaur.com", "http://localhost:3000","https://opaur.vercel.app"];

export async function POST(request) {
  const origin = request.headers.get("origin") || request.headers.get("referer");

  // Verifica si la solicitud proviene de una URL permitida
  if (!origin || !allowedOrigins.some((allowed) => origin.startsWith(allowed))) {
    return new Response(JSON.stringify({ error: "CORS not allowed" }), { status: 403 });
  }

  try {
    const body = await request.json();
    const { email, metadata } = body;

    if (!email || !metadata) {
      return new Response(
        JSON.stringify({ error: "The email and metadata fields are required" }),
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("leads")
      .insert([{ email, metadata }])
      .select("*");

    if (error || !data || data.length === 0) {
      return new Response(
        JSON.stringify({ error: "Error inserting lead", details: error.message }),
        { status: 500 }
      );
    }

    return new Response(JSON.stringify({ message: "Lead created", lead: data }), {
      status: 201,
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": origin, // Permite el origen de la solicitud
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Error. " + err }), {
      status: 500,
    });
  }
}

// Manejo de pre-flight requests (CORS OPTIONS)
export async function OPTIONS(request) {
  const origin = request.headers.get("origin") || request.headers.get("referer");

  if (!origin || !allowedOrigins.some((allowed) => origin.startsWith(allowed))) {
    return new Response(null, { status: 403 });
  }

  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}