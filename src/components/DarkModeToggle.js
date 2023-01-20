import React, { useEffect } from "react";

function DarkModeToggle({ theme, setTheme, mainRef }) {
  function handleToggleTheme(e) {
    setTheme(e.target.checked ? "dark" : "light");
  }

  useEffect(() => {
    if(theme === "dark") {
      mainRef.current.classList.add("dark");
      mainRef.current.classList.remove("light");
    } else {
      mainRef.current.classList.add("light");
      mainRef.current.classList.remove("dark");
    }
  }, [theme, mainRef])

  return (
    <label>
      Dark Mode
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={handleToggleTheme}
      />
    </label>
  );
}

export default DarkModeToggle;
