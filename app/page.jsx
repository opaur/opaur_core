import DemoClientComponent from "./components/OpaurClientComponent";
import { createClient } from '@/utils/supabase/server';
import HeaderComponent from "./components/HeaderComponent";

export default async function Home() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  return (
    <main className="flex min-h-screen flex-col">
      <HeaderComponent user={data?.user} />
   
  
    <div className="flex-grow flex flex-col items-center justify-center p-10">
      <DemoClientComponent />        
    </div>
  
    <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-5xl mx-auto flex justify-center items-center">
        <p className="text-sm">By OpAur Test</p>
      </div>
    </footer>
  </main>
  
  );
}
