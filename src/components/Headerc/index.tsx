import DropdownMessage from "../Header/DropdownMessage";
import DropdownNotification from "../Header/DropdownNotification";
import DropdownUser from "../Header/DropdownUser";
import Image from "next/image";
import { type User } from "@supabase/auth-helpers-nextjs";
import useColorMode from "@/hooks/useColorMode"; // Adjust based on your actual pathi
import Link from "next/link";


const HeaderComp = ({ user }: { user: User | null }) => {
  const isLoggedIn = user != null;
  const colorMode = useColorMode(); // Get the current color mode

  return (
    <header className="p-4 sticky top-0 bg-white dark:border-strokedark dark:bg-boxdark shadow-md z-10">
      <nav className="container mx-auto flex max-w-screen-lg items-center justify-between">
        <div className="text-lg font-bold text-black dark:text-white">
        <Link href="/dashboard">
  <picture>
    {/* Imagen para modo oscuro */}
    <source srcSet="/images/logo/logo_opaur_blanco.svg" media="(prefers-color-scheme: dark)" />
    {/* Imagen para modo claro */}
    <img src="/images/logo/logo_opaur_aurora.svg" alt="Logo Opaur" 
        width={100}
        height={45} />
  </picture>
</Link>
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            {isLoggedIn && (
              <>
                <DropdownNotification />
                <DropdownMessage />
                <DropdownUser user={user} />
              </>
            )}
          </ul>

          {isLoggedIn ? (
            <a
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-center text-sm font-medium text-white hover:bg-opacity-90 lg:px-6 xl:px-8"
            >
              Dashboard
              <span className="ml-1 text-lg">&#8594;</span>
            </a>
          ) : (
            <a
              href="/auth/signin"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-center text-sm font-medium text-white hover:bg-opacity-90 lg:px-6 xl:px-8"
            >
              Sign In
              <span className="ml-1 text-lg">&#8594;</span>
            </a>
          )}
        </div>
      </nav>
    </header>
  );
};

export default HeaderComp;
