import {
  useEffect,
  useState,
} from "react";

export default function ScrollProgress() {

  const [width, setWidth] =
    useState(0);

  useEffect(() => {

    const scroll = () => {

      const total =

        document.documentElement.scrollHeight -

        window.innerHeight;

      const progress =

        (window.scrollY / total) * 100;

      setWidth(progress);

    };

    window.addEventListener(

      "scroll",

      scroll

    );

    return () =>

      window.removeEventListener(

        "scroll",

        scroll

      );

  }, []);

  return (

    <div
      className="
      fixed
      top-0
      left-0
      w-full
      h-1
      z-[999]
      "
    >

      <div

        style={{
          width: `${width}%`,
        }}

        className="
        h-full
        bg-cyan-400
        shadow-[0_0_20px_#22d3ee]
        "

      />

    </div>

  );

}