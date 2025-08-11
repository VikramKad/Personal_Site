import { motion } from "framer-motion";

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const About = () => {
  return (
    <motion.section
      id="about"
      className="relative px-6 sm:px-24 pt-20 sm:pt-48 pb-16 sm:pb-24 bg-[#F6F4F2] text-[#07062A] font-custom scroll-mt-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={slideUp}
    >
      <div className="max-w-5xl sm:pl-12">
        <h2 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8">About</h2>

        <p className="text-base sm:text-xl leading-relaxed mb-5 sm:mb-6 font-inter">
          I'm Vikram, a passionate builder of meaningful products. 
          I thrive at the intersection of business and technology, turning strategy into tangible impact. 
          With a background in computer science and entrepreneurship, I bring a deep understanding of technical challenges while also keeping an eye on the big picture. 
          I’m also deeply interesteed in marketing and its power to change minds and drive success.

        </p>

        <p className="text-base sm:text-xl leading-relaxed font-inter">
          I've led projects where design, development, and execution needed to align seamlessly. 
          My curiosity and creativity fuel my belief that technology should make people's lives better, not just faster. 
          If you’re working on something bold and innovative, I’d love to connect.
        </p>
      </div>
    </motion.section>
  );
};

export default About;
