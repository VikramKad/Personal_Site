import { motion } from "framer-motion";

const Home = () => {
  const scrollToProjects = () => {
    const projects = document.getElementById("projects");
    if (projects) {
      const y = projects.getBoundingClientRect().top + window.scrollY - 50;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center px-6 sm:px-8 bg-background text-textcolor font-custom overflow-hidden scroll-mt-24"
    >
      <motion.div
        className="max-w-4xl mt-16 sm:mt-28 relative"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Smaller only on mobile; unchanged on desktop */}
        <motion.h1
          className="text-3xl sm:text-7xl lg:text-8xl font-bold leading-tight sm:leading-snug tracking-tight"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Hi,<br /><span className="font-bold">I'm Vikram Kadyan</span>
        </motion.h1>

        <motion.p
          className="mt-5 sm:mt-6 max-w-3xl text-base sm:text-2xl text-textcolor/80 leading-relaxed"
          style={{ fontFamily: 'Inter, sans-serif' }}
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        >
          I build impactful products that connect business strategy with creativity and a commitment to improving the world.
        </motion.p>

        <motion.button
          onClick={scrollToProjects}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.5 }}
          className="inline-block mt-6 px-5 sm:px-10 py-2.5 sm:py-5 text-sm sm:text-xl border-2 border-textcolor rounded-full text-textcolor font-semibold hover:bg-textcolor hover:text-background transition-colors"
        >
          See My Work
        </motion.button>
      </motion.div>

      <motion.div
        className="absolute bottom-[-80px] left-[5%] right-[5%] h-px bg-separator"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
      />
    </section>
  );
};

export default Home;
