import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

export default function Footer() {

  return (

    <footer
      className="
      bg-black
      text-white
      py-10
      border-t
      border-cyan-500/20
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        "
      >

        <div
          className="
          flex
          flex-col
          lg:flex-row
          justify-between
          items-center
          gap-8
          "
        >

          <div>

            <h2
              className="
              text-3xl
              font-black
              text-cyan-400
              "
            >
              Hanumanth H
            </h2>

            <p
              className="
              mt-2
              text-slate-400
              "
            >
              Python Full Stack Developer
            </p>

          </div>

          <div
            className="
            flex
            gap-6
            text-3xl
            "
          >

            <a
              href="https://github.com/Hanumanth88600"
              target="_blank"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/hanumanthappah-3759b4367/"
              target="_blank"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:hanumanthappah5258@gmail.com"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        <hr
          className="
          my-8
          border-cyan-500/20
          "
        />

        <p
          className="
          text-center
          text-slate-400
          "
        >

          © {new Date().getFullYear()} Hanumanth H • Built with React, Vite &
          Tailwind CSS

        </p>

        <p
          className="
          text-center
          mt-2
          text-slate-500
          flex
          justify-center
          items-center
          gap-2
          "
        >

          Made with

          <FaHeart
            className="text-red-500"
          />

          in India

        </p>

      </div>

    </footer>

  );

}