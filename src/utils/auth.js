export async function authenticateRequest(request) {
    // Asegurar que Supabase está configurado
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      return {
        error: new Response(
          JSON.stringify({ error: "Supabase no está configurado correctamente" }),
          { status: 500 }
        ),
        user: null,
      };
    }
  
    // Obtén el token del encabezado Authorization
    const token = request.headers.get("Authorization")?.replace("Bearer ", "");
  
    if (!token) {
      return {
        error: new Response(JSON.stringify({ error: "Token no proporcionado" }), {
          status: 401,
        }),
        user: null,
      };
    }
  
    // Validar el token llamando a la API de Supabase
    const userResponse = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/auth/v1/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, // Usa la variable segura
      },
    });
  
    if (!userResponse.ok) {
      return {
        error: new Response(JSON.stringify({ error: "Token inválido o expirado" }), {
          status: 401,
        }),
        user: null,
      };
    }
  
    const user = await userResponse.json();
    return { error: null, user };
  }