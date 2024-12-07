import { supabase } from '@/utils/supabaseClient';

export async function GET(request) {
  if (!supabase) {
    return new Response(JSON.stringify({ error: 'Supabase no está configurado correctamente' }), {
      status: 500,
    });
  }
  const { searchParams } = new URL(request.url);
  const user_id = searchParams.get('user_id');
  const { data, error } = await supabase
  .from('brands_users')
  .select('*, brand:brands(*)')
  .eq('user_id',user_id);

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }

  return new Response(JSON.stringify(data), {
    status: 200,
  });
}