import Image from "next/image";
import { logout } from "./logout/actions";
import DemoClientComponent from "./components/OpaurClientComponent";
import { createClient } from '@/utils/supabase/server';
import HeaderComponent from "./components/HeaderComponent";

export default async function Home() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  return (
    <main className="flex min-h-screen flex-col">
      <header className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
          <h1 className="text-xl font-semibold">My App</h1>
        </div>
        <nav className="flex items-center gap-6">
          <a href="/" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <HeaderComponent user={data?.user}/>
          
        </nav>
      </header>

      <div className="flex-grow flex flex-col items-center justify-center p-10">
        <DemoClientComponent />
        <HeaderComponent user={data?.user}/>
      </div>

      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-5xl mx-auto flex justify-center items-center">
          <p className="text-sm">By OpAur Test</p>
        </div>
      </footer>
    </main>
  );
}
