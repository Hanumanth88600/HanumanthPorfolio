import {
  useEffect,
  useState,
} from "react";

import {
  FaArrowUp,
} from "react-icons/fa";

export default function ScrollTop() {

  const [show, setShow] =
    useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setShow(

        window.scrollY > 300

      );

    };

    window.addEventListener(

      "scroll",

      handleScroll

    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  if (!show) return null;

  return (

    <button

      onClick={() =>
        window.scrollTo({

          top: 0,

          behavior: "smooth",

        })
      }

      className="
      fixed
      bottom-8
      right-8
      w-14
      h-14
      rounded-full
      bg-cyan-500
      hover:bg-cyan-400
      text-white
      shadow-2xl
      z-50
      "

    >

      <FaArrowUp />

    </button>

  );

}