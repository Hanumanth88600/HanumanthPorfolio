import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaBriefcase,
  FaCertificate,
} from "react-icons/fa";

const timeline = [

  {
    icon: <FaBriefcase />,
    title: "Software Developer Intern",
    company: "Intelaix Consulting Services Pvt Ltd",
    period: "2025",
    description:
      "Worked on Django REST Framework APIs, React integration, PostgreSQL database operations, debugging, authentication, and production-ready web applications.",
    color: "bg-cyan-500",
  },

  {
    icon: <FaGraduationCap />,
    title: "Master of Computer Applications (MCA)",
    company: "Dayananda Sagar College of Engineering",
    period: "2023 - 2025",
    description:
      "Specialized in Full Stack Development, Database Systems, Software Engineering, Cloud Computing, and Web Technologies.",
    color: "bg-blue-500",
  },

  {
    icon: <FaGraduationCap />,
    title: "Bachelor of Commerce (Computer Application)",
    company: "Veerashaiva Degree College",
    period: "2020 - 2023",
    description:
      "Built a strong foundation in Programming, DBMS, Operating Systems, Data Structures, and Software Development.",
    color: "bg-indigo-500",
  },

  {
    icon: <FaCertificate />,
    title: "Technical Skills",
    company: "React • Django • MERN • PostgreSQL • MongoDB",
    period: "Continuous Learning",
    description:
      "Continuously improving through real-world projects, deployment, REST APIs, authentication, and full-stack application development.",
    color: "bg-emerald-500",
  },

];

export default function Timeline() {

  return (

    <section
      id="timeline"
      className="
      py-28
      bg-slate-900
      text-white
      "
    >

      <div className="max-w-6xl mx-auto px-6">

        <motion.h2

          initial={{ opacity: 0, y: 40 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true }}

          className="
          text-5xl
          font-black
          text-center
          mb-20
          "

        >

          Experience & Education

        </motion.h2>

        <div className="relative">

          <div
            className="
            absolute
            left-7
            top-0
            bottom-0
            w-1
            bg-cyan-500/30
            "
          />

          {

            timeline.map((item, index) => (

              <motion.div

                key={index}

                initial={{
                  opacity: 0,
                  x: -80,
                }}

                whileInView={{
                  opacity: 1,
                  x: 0,
                }}

                viewport={{
                  once: true,
                }}

                transition={{
                  delay: index * .15,
                }}

                className="
                relative
                pl-24
                pb-16
                "

              >

                <div

                  className={`
                  absolute
                  left-0
                  top-1
                  w-14
                  h-14
                  rounded-full
                  flex
                  items-center
                  justify-center
                  text-white
                  text-xl
                  ${item.color}
                  `}

                >

                  {item.icon}

                </div>

                <div

                  className="
                  bg-slate-950
                  rounded-3xl
                  border
                  border-cyan-500/20
                  p-8
                  shadow-xl
                  hover:-translate-y-2
                  transition
                  "

                >

                  <span
                    className="
                    text-cyan-400
                    font-semibold
                    "
                  >

                    {item.period}

                  </span>

                  <h3
                    className="
                    text-2xl
                    font-bold
                    mt-2
                    "
                  >

                    {item.title}

                  </h3>

                  <h4
                    className="
                    text-slate-400
                    mt-2
                    "
                  >

                    {item.company}

                  </h4>

                  <p
                    className="
                    mt-5
                    text-slate-400
                    leading-8
                    "
                  >

                    {item.description}

                  </p>

                </div>

              </motion.div>

            ))

          }

        </div>

      </div>

    </section>

  );

}