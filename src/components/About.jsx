import { motion } from "framer-motion";

import {
  FaUserGraduate,
  FaLaptopCode,
  FaBriefcase,
  FaCode,
} from "react-icons/fa";

export default function About() {

  return (

    <section

      id="about"

      className="
      py-28
      bg-slate-950
      text-white
      "

    >

      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        "
      >

        <motion.h2

          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: .7,
          }}

          className="
          text-5xl
          font-black
          text-center
          mb-16
          "

        >

          About Me

        </motion.h2>

        <div
          className="
          grid
          lg:grid-cols-2
          gap-14
          items-center
          "
        >

          {/* LEFT */}

          <motion.div

            initial={{
              opacity: 0,
              x: -50,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: .8,
            }}

          >

            <h3
              className="
              text-3xl
              font-bold
              text-cyan-400
              "
            >

              Python Full Stack Developer

            </h3>

            <p
              className="
              mt-6
              leading-8
              text-slate-300
              text-lg
              "
            >

              I am an MCA graduate passionate about designing and developing
              scalable, secure, and responsive web applications.

            </p>

            <p
              className="
              mt-5
              leading-8
              text-slate-300
              text-lg
              "
            >

              My expertise includes React.js, Django REST Framework,
              PostgreSQL, JavaScript, Node.js, Express.js,
              MongoDB, JWT Authentication, REST APIs,
              Git, GitHub, Render, Vercel and AWS Basics.

            </p>

            <p
              className="
              mt-5
              leading-8
              text-slate-300
              text-lg
              "
            >

              Recently I developed an enterprise-level Construction
              Snagging & Inspection Management System called
              <span className="text-cyan-400 font-semibold">
                {" "}SnagPro{" "}
              </span>

              and a MERN-based Grocery Store platform
              with multiple dashboards and live order management.

            </p>

          </motion.div>

          {/* RIGHT */}

          <motion.div

            initial={{
              opacity: 0,
              x: 50,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: .8,
            }}

            className="
            grid
            sm:grid-cols-2
            gap-6
            "

          >

            <div
              className="
              bg-slate-900
              rounded-3xl
              p-8
              border
              border-cyan-500/20
              hover:border-cyan-400
              duration-300
              "
            >

              <FaUserGraduate
                className="
                text-5xl
                text-cyan-400
                mb-5
                "
              />

              <h4
                className="
                text-2xl
                font-bold
                "
              >

                MCA

              </h4>

              <p
                className="
                mt-3
                text-slate-400
                "
              >

                Dayananda Sagar College

              </p>

            </div>

            <div
              className="
              bg-slate-900
              rounded-3xl
              p-8
              border
              border-cyan-500/20
              hover:border-cyan-400
              duration-300
              "
            >

              <FaLaptopCode
                className="
                text-5xl
                text-cyan-400
                mb-5
                "
              />

              <h4
                className="
                text-2xl
                font-bold
                "
              >

                Full Stack

              </h4>

              <p
                className="
                mt-3
                text-slate-400
                "
              >

                React + Django + MERN

              </p>

            </div>

            <div
              className="
              bg-slate-900
              rounded-3xl
              p-8
              border
              border-cyan-500/20
              hover:border-cyan-400
              duration-300
              "
            >

              <FaBriefcase
                className="
                text-5xl
                text-cyan-400
                mb-5
                "
              />

              <h4
                className="
                text-2xl
                font-bold
                "
              >

                Internship

              </h4>

              <p
                className="
                mt-3
                text-slate-400
                "
              >

                Intelaix Consulting Services

              </p>

            </div>

            <div
              className="
              bg-slate-900
              rounded-3xl
              p-8
              border
              border-cyan-500/20
              hover:border-cyan-400
              duration-300
              "
            >

              <FaCode
                className="
                text-5xl
                text-cyan-400
                mb-5
                "
              />

              <h4
                className="
                text-2xl
                font-bold
                "
              >

                Experience

              </h4>

              <p
                className="
                mt-3
                text-slate-400
                "
              >

                Full Stack Web Development

              </p>

            </div>

          </motion.div>

        </div>

        {/* STATS */}

        <div
          className="
          grid
          md:grid-cols-4
          gap-8
          mt-24
          "
        >

          <div
            className="
            bg-slate-900
            rounded-3xl
            py-10
            text-center
            border
            border-cyan-500/20
            "
          >

            <h2
              className="
              text-5xl
              font-black
              text-cyan-400
              "
            >

              20+

            </h2>

            <p
              className="
              mt-3
              text-slate-400
              "
            >

              Technologies

            </p>

          </div>

          <div
            className="
            bg-slate-900
            rounded-3xl
            py-10
            text-center
            border
            border-cyan-500/20
            "
          >

            <h2
              className="
              text-5xl
              font-black
              text-cyan-400
              "
            >

              4+

            </h2>

            <p
              className="
              mt-3
              text-slate-400
              "
            >

              Full Stack Projects

            </p>

          </div>

          <div
            className="
            bg-slate-900
            rounded-3xl
            py-10
            text-center
            border
            border-cyan-500/20
            "
          >

            <h2
              className="
              text-5xl
              font-black
              text-cyan-400
              "
            >

              15+

            </h2>

            <p
              className="
              mt-3
              text-slate-400
              "
            >

              REST APIs

            </p>

          </div>

          <div
            className="
            bg-slate-900
            rounded-3xl
            py-10
            text-center
            border
            border-cyan-500/20
            "
          >

            <h2
              className="
              text-5xl
              font-black
              text-cyan-400
              "
            >

              100%

            </h2>

            <p
              className="
              mt-3
              text-slate-400
              "
            >

              Passion

            </p>

          </div>

        </div>

      </div>

    </section>

  );

}