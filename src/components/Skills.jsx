import { motion } from "framer-motion";

const categories = [

  {

    title: "Frontend",

    skills: [

      { name: "HTML5", level: 95 },

      { name: "CSS3", level: 92 },

      { name: "JavaScript", level: 90 },

      { name: "React.js", level: 90 },

      { name: "Tailwind CSS", level: 90 },

      { name: "Bootstrap", level: 90 },

    ],

  },

  {

    title: "Backend",

    skills: [

      { name: "Python", level: 90 },

      { name: "Django", level: 90 },

      { name: "Django REST", level: 88 },

      { name: "Node.js", level: 82 },

      { name: "Express.js", level: 82 },

      { name: "JWT Authentication", level: 90 },

    ],

  },

  {

    title: "Database",

    skills: [

      { name: "PostgreSQL", level: 88 },

      { name: "MySQL", level: 88 },

      { name: "MongoDB", level: 85 },

      { name: "SQLite", level: 85 },

    ],

  },

  {

    title: "Tools",

    skills: [

      { name: "Git", level: 90 },

      { name: "GitHub", level: 92 },

      { name: "Postman", level: 90 },

      { name: "VS Code", level: 95 },

      { name: "Render", level: 85 },

      { name: "Vercel", level: 85 },

    ],

  },

];

export default function Skills() {

  return (

    <section

      id="skills"

      className="
      py-28
      bg-slate-950
      text-white
      "

    >

      <div className="max-w-7xl mx-auto px-6">

        <motion.h2

          initial={{ opacity: 0, y: 40 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: .6 }}

          viewport={{ once: true }}

          className="
          text-5xl
          font-black
          text-center
          mb-20
          "

        >

          Technical Skills

        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-10">

          {

            categories.map((category,index)=>(

              <motion.div

                key={index}

                initial={{
                  opacity:0,
                  y:50
                }}

                whileInView={{
                  opacity:1,
                  y:0
                }}

                transition={{
                  delay:index*.15
                }}

                viewport={{
                  once:true
                }}

                className="
                bg-slate-900
                rounded-3xl
                p-8
                border
                border-cyan-500/20
                shadow-xl
                "

              >

                <h3
                  className="
                  text-3xl
                  font-bold
                  mb-10
                  text-cyan-400
                  "
                >

                  {category.title}

                </h3>

                {

                  category.skills.map((skill,i)=>(

                    <div
                      key={i}
                      className="mb-8"
                    >

                      <div
                        className="
                        flex
                        justify-between
                        mb-2
                        "
                      >

                        <span>

                          {skill.name}

                        </span>

                        <span>

                          {skill.level}%

                        </span>

                      </div>

                      <div
                        className="
                        h-3
                        rounded-full
                        bg-slate-700
                        overflow-hidden
                        "
                      >

                        <motion.div

                          initial={{
                            width:0
                          }}

                          whileInView={{
                            width:`${skill.level}%`
                          }}

                          transition={{
                            duration:1
                          }}

                          viewport={{
                            once:true
                          }}

                          className="
                          h-full
                          rounded-full
                          bg-gradient-to-r
                          from-cyan-500
                          to-blue-500
                          "

                        />

                      </div>

                    </div>

                  ))

                }

              </motion.div>

            ))

          }

        </div>

      </div>

    </section>

  );

}