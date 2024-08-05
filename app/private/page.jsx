import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import HeaderComponent from '../components/FooterComponent';

export default async function PrivatePage() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect('/');
  }

  return (
    <main className="flex min-h-screen flex-col">
      <HeaderComponent user={data.user} />

      <div className="flex-grow flex flex-col items-center justify-center p-10">
        <p>Hello {data.user.email}</p>
      </div>

      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-5xl mx-auto flex justify-center items-center">
          <p className="text-sm">By OpAur Test</p>
        </div>
      </footer>
    </main>
  );
}
