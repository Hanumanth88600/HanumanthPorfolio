import {
  useEffect,
  useState,
} from "react";

import {
  FaMoon,
  FaSun,
} from "react-icons/fa";

export default function ThemeToggle() {

  const [dark, setDark] =
    useState(true);

  useEffect(() => {

    document.documentElement.classList.toggle(

      "dark",

      dark

    );

  }, [dark]);

  return (

    <button

      onClick={() =>
        setDark(!dark)
      }

      className="
      fixed
      top-24
      right-8
      z-50
      w-12
      h-12
      rounded-full
      bg-cyan-500
      text-white
      shadow-lg
      "

    >

      {

        dark

          ? <FaSun />

          : <FaMoon />

      }

    </button>

  );

}