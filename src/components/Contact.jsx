import { useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";

export default function Contact() {

  const [form, setForm] = useState({

    name: "",

    email: "",

    subject: "",

    message: "",

  });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {

    setForm({

      ...form,

      [e.target.name]:
        e.target.value,

    });

  };


  const handleSubmit = async (e) => {

  e.preventDefault();

  setLoading(true);

  try {

    await emailjs.send(

      import.meta.env.VITE_EMAILJS_SERVICE_ID,

      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,

      {

        from_name: form.name,

        from_email: form.email,

        subject: form.subject,

        message: form.message,

      },

      import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    );

    alert("✅ Message sent successfully!");

    setForm({

      name: "",

      email: "",

      subject: "",

      message: "",

    });

  }

  catch (error) {

    console.error(error);

    alert("❌ Failed to send message.");

  }

  finally {

    setLoading(false);

  }

};

  return (

    <section

      id="contact"

      className="
      py-28
      bg-slate-900
      text-white
      "

    >

      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        grid
        lg:grid-cols-2
        gap-14
        "
      >

        {/* LEFT */}

        <div>

          <h2
            className="
            text-5xl
            font-black
            "
          >

            Contact Me

          </h2>

          <p
            className="
            mt-6
            text-slate-400
            leading-8
            "
          >

            Interested in working together,
            hiring me, or discussing a project?

            Feel free to contact me.

          </p>

          <div
            className="
            mt-10
            space-y-6
            "
          >

            <div className="flex gap-4 items-center">

              <FaEnvelope
                className="text-cyan-400 text-2xl"
              />

              <span>

                hanumanthappah5258@gmail.com

              </span>

            </div>

            <div className="flex gap-4 items-center">

              <FaPhone
                className="text-cyan-400 text-2xl"
              />

              <span>

                +91 9108801244

              </span>

            </div>

            <div className="flex gap-4 items-center">

              <FaMapMarkerAlt
                className="text-cyan-400 text-2xl"
              />

              <span>

                Bengaluru, Karnataka

              </span>

            </div>

          </div>

          <div
            className="
            flex
            gap-5
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

          <a

            href="/resume.pdf"

            download

            className="
            inline-flex
            items-center
            gap-3
            mt-10
            px-8
            py-4
            rounded-xl
            bg-cyan-500
            hover:bg-cyan-400
            font-semibold
            "

          >

            <FaDownload />

            Download Resume

          </a>

        </div>

        {/* RIGHT */}

        <form

          onSubmit={handleSubmit}

          className="
          bg-slate-950
          rounded-3xl
          p-8
          border
          border-cyan-500/20
          "

        >

          <input

            type="text"

            name="name"

            placeholder="Full Name"

            value={form.name}

            onChange={handleChange}

            required

            className="
            w-full
            p-4
            mb-5
            rounded-xl
            bg-slate-800
            outline-none
            "

          />

          <input

            type="email"

            name="email"

            placeholder="Email"

            value={form.email}

            onChange={handleChange}

            required

            className="
            w-full
            p-4
            mb-5
            rounded-xl
            bg-slate-800
            outline-none
            "

          />

          <input

            type="text"

            name="subject"

            placeholder="Subject"

            value={form.subject}

            onChange={handleChange}

            required

            className="
            w-full
            p-4
            mb-5
            rounded-xl
            bg-slate-800
            outline-none
            "

          />

          <textarea

            rows={6}

            name="message"

            placeholder="Message"

            value={form.message}

            onChange={handleChange}

            required

            className="
            w-full
            p-4
            rounded-xl
            bg-slate-800
            outline-none
            "

          />

          <button

            type="submit"

            disabled={loading}

            className="
            w-full
            mt-8
            py-4
            rounded-xl
            bg-cyan-500
            hover:bg-cyan-400
            font-semibold
            "

          >

            {

              loading

                ? "Sending..."

                : "Send Message"

            }

          </button>

        </form>

      </div>

    </section>

  );

}