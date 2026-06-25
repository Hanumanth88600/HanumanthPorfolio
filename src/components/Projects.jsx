import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const projects = [

  {
    title: "SnagPro",

    image: "/projects/snagpro.png",

    description:
      "A modern Construction Snagging & Inspection Management System built with React, Django REST Framework, PostgreSQL, and JWT Authentication. It includes role-based dashboards, project management, inspection tracking, snag management, analytics, EmailJS integration, and a responsive glassmorphism UI.",

    frontend:
      "https://github.com/Hanumanth88600/snagpro-frontend",

    backend:
      "https://github.com/Hanumanth88600/snagpro-backend",

    demos: [
      {
        name: "Live Demo",
        url: "https://snagpro-frontend.vercel.app/",
      },
    ],

    tech: [
      "React",
      "Django",
      "DRF",
      "PostgreSQL",
      "JWT",
      "Tailwind CSS",
      "EmailJS",
      "Render",
      "Vercel",
    ],
  },

  {
    title: "Grocery Store",

    image: "/projects/grocery.png",

    description:
      "A Blinkit-inspired MERN Quick Commerce platform featuring Customer, Admin, Picker, and Delivery dashboards with inventory management, real-time order workflow, authentication, and role-based access.",

    frontend:
      "https://github.com/Hanumanth88600/Grocery-Store-Project",

    demos: [
      {
        name: "Customer",
        url: "https://grocery-store-project-customer.vercel.app/",
      },
      {
        name: "Picker",
        url: "https://grocery-store-project-picker.vercel.app/",
      },
      {
        name: "Delivery",
        url: "https://grocery-store-project-delivery-agent.vercel.app/",
      },
    ],

    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "JWT",
      "Tailwind CSS",
    ],
  },

];

export default function Projects() {

  return (

    <section
      id="projects"
      className="
      py-28
      bg-slate-900
      text-white
      "
    >

      <div className="max-w-7xl mx-auto px-6">

        <h2
          className="
          text-5xl
          font-black
          text-center
          mb-20
          "
        >
          Featured Projects
        </h2>

        <div className="grid lg:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <Tilt
              key={index}
              glareEnable
              glareMaxOpacity={0.3}
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
            >

              <motion.div

                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}

                className="
                bg-slate-950
                rounded-3xl
                overflow-hidden
                border
                border-cyan-500/20
                shadow-2xl
                h-full
                "

              >

                <img

                  src={project.image}

                  alt={project.title}

                  className="
                  w-full
                  h-64
                  object-cover
                  "

                />

                <div className="p-8 flex flex-col h-full">

                  <h3 className="text-3xl font-bold">

                    {project.title}

                  </h3>

                  <p
                    className="
                    text-slate-400
                    mt-5
                    leading-8
                    "
                  >

                    {project.description}

                  </p>

                  <div
                    className="
                    flex
                    flex-wrap
                    gap-3
                    mt-8
                    "
                  >

                    {project.tech.map((tech, i) => (

                      <span

                        key={i}

                        className="
                        px-4
                        py-2
                        rounded-full
                        bg-cyan-500/20
                        text-cyan-300
                        text-sm
                        "

                      >

                        {tech}

                      </span>

                    ))}

                  </div>

                  <div
                    className="
                    flex
                    flex-wrap
                    gap-4
                    mt-10
                    "
                  >

                    {/* Frontend */}

                    <a

                      href={project.frontend}

                      target="_blank"

                      rel="noopener noreferrer"

                      className="
                      px-5
                      py-3
                      rounded-xl
                      bg-slate-800
                      hover:bg-slate-700
                      flex
                      items-center
                      gap-2
                      transition
                      "

                    >

                      <FaGithub />

                      Frontend

                    </a>

                    {/* Backend */}

                    {project.backend && (

                      <a

                        href={project.backend}

                        target="_blank"

                        rel="noopener noreferrer"

                        className="
                        px-5
                        py-3
                        rounded-xl
                        bg-slate-800
                        hover:bg-slate-700
                        flex
                        items-center
                        gap-2
                        transition
                        "

                      >

                        <FaGithub />

                        Backend

                      </a>

                    )}

                    {/* Demo Links */}

                    {project.demos.map((demo, i) => (

                      <a

                        key={i}

                        href={demo.url}

                        target="_blank"

                        rel="noopener noreferrer"

                        className="
                        px-5
                        py-3
                        rounded-xl
                        bg-cyan-500
                        hover:bg-cyan-400
                        flex
                        items-center
                        gap-2
                        transition
                        "

                      >

                        <FaExternalLinkAlt />

                        {demo.name}

                      </a>

                    ))}

                  </div>

                </div>

              </motion.div>

            </Tilt>

          ))}

        </div>

      </div>

    </section>

  );

}