import { supabase } from '@/utils/supabaseClient';
import { authenticateRequest } from "@/utils/auth";
export async function GET(request) {
  if (!supabase) {
    return new Response(JSON.stringify({ error: 'Supabase no está configurado correctamente' }), {
      status: 500,
    });
  }
  const { error_auth, user } = await authenticateRequest(request);
  if (error_auth) return error; // Retorna el error directamente si falla la autenticación

  const { data, error } = await supabase.from('brands_industries').select('*');

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }

  return new Response(JSON.stringify(data), {
    status: 200,
  });
}