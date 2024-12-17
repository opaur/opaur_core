import { supabase } from '@/utils/supabaseClient';

export async function GET(request) {
  if (!supabase) {
    return new Response(JSON.stringify({ error: 'Supabase no está configurado correctamente' }), {
      status: 500,
    });
  }
  const { searchParams } = new URL(request.url);
  const default_property = searchParams.get('default_property');
  const { data, error } = await supabase
  .from('brands_properties')
  .select('*')
  .eq('default_property',default_property);

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }

  return new Response(JSON.stringify(data), {
    status: 200,
  });
}

