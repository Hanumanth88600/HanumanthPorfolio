import {
  useEffect,
  useState,
} from "react";

export default function MouseGlow() {

  const [mouse, setMouse] =
    useState({

      x: 0,

      y: 0,

    });

  useEffect(() => {

    const move = (e) => {

      setMouse({

        x: e.clientX,

        y: e.clientY,

      });

    };

    window.addEventListener(

      "mousemove",

      move

    );

    return () =>

      window.removeEventListener(

        "mousemove",

        move

      );

  }, []);

  return (

    <div

      style={{

        left: mouse.x - 150,

        top: mouse.y - 150,

      }}

      className="
      fixed
      w-[300px]
      h-[300px]
      rounded-full
      pointer-events-none
      blur-3xl
      bg-cyan-500/20
      z-0
      transition-all
      duration-150
      "

    />

  );

}