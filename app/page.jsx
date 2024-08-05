import { createClient } from '@/utils/supabase/server';
import HeaderComponent from "./components/HeaderComponent";
import Footer from "./components/FooterComponent";
import { Landingpage } from './components/LandingPage';

export default async function Home() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  return (
    <main className="flex min-h-screen flex-col">
      <HeaderComponent user={data?.user} />
      <div className="flex-grow">
        <Landingpage />
      </div>
      <Footer />
    </main>
  );
}