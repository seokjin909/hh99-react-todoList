import React from "react";
import { useDarkMode } from "../../context/DarkModeContext";
import { HiMoon, HiSun } from "react-icons/hi";
import { HeaderArea, Toggle } from "./styles";

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <HeaderArea>
      <Toggle onClick={toggleDarkMode}>
        {!darkMode && <HiMoon />}
        {darkMode && <HiSun />}
      </Toggle>
      <p style={{ color: "var(--color-accent)" }}>My Todo List</p>
    </HeaderArea>
  );
};

export default Header;
