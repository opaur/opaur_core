import useColorMode from "@/hooks/useColorMode";

const DarkModeSwitcher = () => {
  const [colorMode] = useColorMode();

  return (
    <li>
      <div
        className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 relative flex h-10 w-10 items-center justify-center rounded-full"
        aria-label={colorMode === "dark" ? "Dark mode" : "Light mode"}
      >
        {colorMode === "dark" ? (

        <svg height="24px" width="24px" fill="white" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
           viewBox="0 0 56 56">
        <path d="M29,28c0-11.917,7.486-22.112,18-26.147C43.892,0.66,40.523,0,37,0C21.561,0,9,12.561,9,28
          s12.561,28,28,28c3.523,0,6.892-0.66,10-1.853C36.486,50.112,29,39.917,29,28z"/>
        </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-yellow-500"
          >
            <circle
              cx="12"
              cy="12"
              r="5"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M12 2V4M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
    </li>
  );
};

export default DarkModeSwitcher;
