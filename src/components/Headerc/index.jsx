import DarkModeSwitcher from "../Header/DarkModeSwitcher";
import DropdownMessage from "../Header/DropdownMessage";
import DropdownNotification from "../Header/DropdownNotification";
import DropdownUser from "../Header/DropdownUser";

const HeaderComp = () => {
  return (
    <header className="p-4">
      <nav className="container mx-auto flex items-center justify-between max-w-screen-lg">
        <div className="text-lg font-bold">
          <span className="text-xl">OpAur</span>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="/private"
            className="inline-flex items-center justify-center rounded-full bg-meta-3 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-90"
          >
            Dashboard
            <span className="ml-1 text-lg">&#8594;</span>
          </a>
          <form className="inline">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-meta-3 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-90"
            >
              Logout
            </button>
          </form>
          <a
            href="/login"
            className="inline-flex items-center justify-center rounded-full bg-meta-3 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-90"
          >
            Login
          </a>
        </div>
        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            {/* Dark Mode Toggler */}
            <DarkModeSwitcher />
            {/* Notification Menu Area */}
            <DropdownNotification />
            {/* Chat Notification Area */}
            <DropdownMessage />
          </ul>
          {/* User Area */}
          <DropdownUser />
        </div>
      </nav>
    </header>
  );
}

export default HeaderComp;
