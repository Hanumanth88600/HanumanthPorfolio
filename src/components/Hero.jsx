import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

export default function Hero() {

  return (

    <section
      id="home"
      className="
      min-h-screen
      flex
      items-center
      justify-center
      relative
      overflow-hidden
      "
    >

      {/* Background Blur */}

      <div
        className="
        absolute
        w-[500px]
        h-[500px]
        rounded-full
        bg-cyan-500/20
        blur-[120px]
        -top-24
        -left-24
        "
      />

      <div
        className="
        absolute
        w-[400px]
        h-[400px]
        rounded-full
        bg-blue-500/20
        blur-[120px]
        bottom-0
        right-0
        "
      />

      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        grid
        lg:grid-cols-2
        gap-16
        items-center
        relative
        z-10
        "
      >

        {/* LEFT */}

        <motion.div

          initial={{ opacity: 0, x: -80 }}

          animate={{ opacity: 1, x: 0 }}

          transition={{ duration: .8 }}

        >

          <p
            className="
            text-cyan-400
            font-semibold
            mb-4
            "
          >
            👋 Hello, I'm
          </p>

          <h1
            className="
            text-6xl
            lg:text-7xl
            font-black
            leading-tight
            "
          >
            Hanumanth H
          </h1>

          <div
            className="
            text-3xl
            mt-6
            text-slate-300
            font-semibold
            h-16
            "
          >

            <TypeAnimation

              sequence={[

                "Python Full Stack Developer",

                2000,

                "MERN Stack Developer",

                2000,

                "React Developer",

                2000,

                "Django REST Developer",

                2000,

              ]}

              speed={45}

              repeat={Infinity}

            />

          </div>

          <p
            className="
            mt-8
            text-slate-400
            leading-8
            text-lg
            max-w-xl
            "
          >

            Passionate Full Stack Developer building scalable web applications using React, Django REST Framework, Node.js, Express, PostgreSQL and MongoDB. I enjoy transforming ideas into modern, production-ready software.

          </p>

          <div
            className="
            flex
            flex-wrap
            gap-5
            mt-10
            "
          >

            <a

              href="#projects"

              className="
              px-8
              py-4
              rounded-xl
              bg-cyan-500
              hover:bg-cyan-400
              flex
              items-center
              gap-3
              transition
              "

            >

              View Projects

              <FaArrowRight />

            </a>

            <a

              href="/resume.pdf"

              download

              className="
              px-8
              py-4
              rounded-xl
              border
              border-cyan-500
              hover:bg-cyan-500
              transition
              flex
              gap-3
              items-center
              "

            >

              <FaDownload />

              Resume

            </a>

          </div>

          <div
            className="
            flex
            gap-6
            mt-10
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

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div

          initial={{ opacity: 0, scale: .8 }}

          animate={{ opacity: 1, scale: 1 }}

          transition={{ duration: 1 }}

          className="
          flex
          justify-center
          "

        >

          <img

            src="/profile.png"

            alt="Profile"

            className="
            w-[420px]
            rounded-full
            border-4
            border-cyan-500/40
            shadow-[0_0_80px_rgba(34,211,238,.4)]
            "

          />

        </motion.div>

      </div>

    </section>

  );

}