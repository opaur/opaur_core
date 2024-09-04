import { useEffect, useState } from "react";

const useColorMode = () => {
  // State to keep track of the color mode
  const [colorMode, setColorMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Function to handle color mode based on system preference
    const handleColorModeChange = (e: MediaQueryListEvent) => {
      const newColorMode = e.matches ? "dark" : "light";
      setColorMode(newColorMode);
      const className = "dark";
      const bodyClass = window.document.body.classList;
      newColorMode === "dark"
        ? bodyClass.add(className)
        : bodyClass.remove(className);
    };

    // Check the system's color mode preference and set the initial color mode
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Set initial mode based on system preference
    const initialColorMode = mediaQuery.matches ? "dark" : "light";
    setColorMode(initialColorMode);
    const className = "dark";
    const bodyClass = window.document.body.classList;
    initialColorMode === "dark"
      ? bodyClass.add(className)
      : bodyClass.remove(className);

    // Add listener for changes in system color mode preference
    mediaQuery.addEventListener("change", handleColorModeChange);

    // Clean up listener on component unmount
    return () => mediaQuery.removeEventListener("change", handleColorModeChange);
  }, []);

  // Return the color mode and setter (if you need to control it manually)
  return [colorMode, setColorMode] as const;
};

export default useColorMode;