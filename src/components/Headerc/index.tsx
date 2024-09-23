import DarkModeSwitcher from "../Header/DarkModeSwitcher";
import DropdownMessage from "../Header/DropdownMessage";
import DropdownNotification from "../Header/DropdownNotification";
import DropdownUser from "../Header/DropdownUser";
import Image from "next/image";
import useColorMode from "@/hooks/useColorMode";

import {
  type User,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
const HeaderComp = ({ user }: { user: User | null }) => {
  const isLoggedIn = user != null;
  const [colorMode] = useColorMode();
  return (
    <header className="p-4 sticky top-0 bg-white dark:border-strokedark dark:bg-boxdark shadow-md z-10">
      <nav className="container mx-auto flex max-w-screen-lg items-center justify-between">
        <div className="text-lg font-bold text-black dark:text-white">
          <Image
                width={100}
                height={45}
                src={colorMode === "dark" ? "/images/logo/logo_opaur_blanco.svg" : "/images/logo/logo_opaur_aurora.svg"}
                alt="Logo"
                priority />
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            <div style={{ display: "none" }}>
              <DarkModeSwitcher />
            </div>
            {isLoggedIn && (
                <>
                <DropdownNotification />
                <DropdownMessage />
                <DropdownUser user={user} />
                </>
            )            
            }
          </ul>

          {isLoggedIn ? (
            <a
            href="/dashboard"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-center text-sm font-medium text-white hover:bg-opacity-90 lg:px-6 xl:px-8 "
          >
            Dashboard
            <span className="ml-1 text-lg">&#8594;</span>
          </a>
            
          ) : (
            <a
              href="/auth/signin"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-center text-sm font-medium text-white hover:bg-opacity-90 lg:px-6 xl:px-8 "
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
