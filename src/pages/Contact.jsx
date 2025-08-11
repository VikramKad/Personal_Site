import { motion } from "framer-motion";
import linkedinLogo from "../assets/linkedinlogo.ico";

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="px-6 sm:px-24 py-16 sm:py-20 bg-white text-[#07062A] font-custom scroll-mt-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={slideUp}
    >
      <div className="max-w-5xl sm:pl-12 font-inter">
        <h2 className="text-xl sm:text-3xl font-bold mb-4 sm:mb-6">Contact Me:</h2>

        <p className="text-base sm:text-lg mb-5 sm:mb-6 font-inter">
          Email me at{" "}
          <a href="mailto:vikyan118@gmail.com" className="underline hover:opacity-70 font-inter">
            vikyan118@gmail.com
          </a>
        </p>

        <a
          href="https://www.linkedin.com/in/vikram-kadyan-932b11212/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linkedinLogo}
            alt="LinkedIn"
            className="w-10 h-10 hover:opacity-70 transition-opacity"
          />
        </a>
      </div>
    </motion.section>
  );
};

export default Contact;
