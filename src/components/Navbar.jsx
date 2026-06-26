import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {

  const [open, setOpen] =
    useState(false);

  const menus = [

    {
      title: "About",
      id: "about",
    },

    {
      title: "Timeline",
      id: "timeline",
    },

    {
      title: "Skills",
      id: "skills",
    },

    {
      title: "Projects",
      id: "projects",
    },

   
    {
      title: "Contact",
      id: "contact",
    },

  ];

  return (

    <nav
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      backdrop-blur-xl
      bg-black/40
      border-b
      border-cyan-500/20
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-4
        flex
        justify-between
        items-center
        "
      >

        <h2
          className="
          text-3xl
          font-black
          text-cyan-400
          "
        >
          Hanumanth
        </h2>

        <div
          className="
          hidden
          md:flex
          gap-10
          "
        >

          {menus.map((item) => (

            <a

              key={item.id}

              href={`#${item.id}`}

              className="
              text-white
              hover:text-cyan-400
              duration-300
              "

            >

              {item.title}

            </a>

          ))}

        </div>

        <button

          className="
          md:hidden
          text-white
          "

          onClick={() =>
            setOpen(!open)
          }

        >

          {

            open
              ? <X size={30} />
              : <Menu size={30} />

          }

        </button>

      </div>

      {

        open && (

          <div
            className="
            md:hidden
            bg-slate-900
            "
          >

            {

              menus.map((item) => (

                <a

                  key={item.id}

                  href={`#${item.id}`}

                  onClick={() =>
                    setOpen(false)
                  }

                  className="
                  block
                  px-6
                  py-4
                  border-b
                  border-slate-700
                  text-white
                  hover:bg-cyan-500
                  "

                >

                  {item.title}

                </a>

              ))

            }

          </div>

        )

      }

    </nav>

  );

}