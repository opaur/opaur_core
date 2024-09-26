import { useEffect, useState } from "react";

const useColorMode = () => {
  // State to keep track of the color mode
  const [colorMode, setColorMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Function to handle color mode based on system preference
    const handleColorModeChange = (e: MediaQueryListEvent) => {
      const newColorMode = e.matches ? "dark" : "light";
      setColorMode(newColorMode);
      updateBodyClass(newColorMode);
    };

    // Function to update the body class based on the color mode
    const updateBodyClass = (mode: "light" | "dark") => {
      const className = "dark";
      const bodyClass = document.body.classList;
      if (mode === "dark") {
        bodyClass.add(className);
      } else {
        bodyClass.remove(className);
      }
    };

    // Check the system's color mode preference and set the initial color mode
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Set initial mode based on system preference
    const initialColorMode = mediaQuery.matches ? "dark" : "light";
    setColorMode(initialColorMode);
    updateBodyClass(initialColorMode);

    // Add listener for changes in system color mode preference
    mediaQuery.addEventListener("change", handleColorModeChange);

    // Clean up listener on component unmount
    return () => mediaQuery.removeEventListener("change", handleColorModeChange);
  }, []);

  // Return the current color mode
  return colorMode;
};

export default useColorMode;
