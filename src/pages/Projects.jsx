import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

import Proj1Preview1 from "../assets/Proj1Preview1.png";
import Proj1Preview2 from "../assets/Proj1Preview2.png";
import Proj2Preview1 from "../assets/Proj2Preview1.png";
import Proj2Preview2 from "../assets/Proj2Preview2.png";

const fadeVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
};

const ProjectCard = ({ title, description, link, img1, img2 }) => {
  const [hovered, setHovered] = useState(false);
  const [ratio, setRatio] = useState(650 / 340);

  const goTop = () => window.scrollTo({ top: 0, behavior: "instant" });

  return (
    <motion.div
      className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8 mb-12 sm:mb-16 pl-0 sm:pl-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeVariants}
    >
      <Link
        to={link}
        onClick={goTop}
        className="relative w-full block sm:hidden"
        style={{ aspectRatio: ratio }}
      >
        <div className="absolute inset-0 rounded-2xl overflow-hidden bg-[#f6f6f6]">
          <img
            src={img1}
            alt={`${title} preview 1`}
            className="absolute inset-0 w-full h-full object-contain object-center"
            onLoad={(e) => {
              const { naturalWidth, naturalHeight } = e.currentTarget;
              if (naturalWidth && naturalHeight) setRatio(naturalWidth / naturalHeight);
            }}
          />
        </div>
      </Link>

      <Link
        to={link}
        onClick={goTop}
        className="relative hidden sm:block sm:w-[650px] cursor-pointer flex-shrink-0"
        style={{ aspectRatio: ratio }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="absolute inset-0 rounded-2xl overflow-hidden bg-[#f6f6f6]">
          <motion.div
            className="absolute top-0 left-0 flex h-full w-[200%]"
            animate={{ x: hovered ? "-50%" : "0%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="relative w-1/2 h-full">
              <img
                src={img1}
                alt={`${title} preview 1`}
                className="absolute inset-0 w-full h-full object-contain object-center"
                onLoad={(e) => {
                  const { naturalWidth, naturalHeight } = e.currentTarget;
                  if (naturalWidth && naturalHeight) setRatio(naturalWidth / naturalHeight);
                }}
              />
            </div>
            <div className="relative w-1/2 h-full">
              <img
                src={img2}
                alt={`${title} preview 2`}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </Link>

      <div className="flex-1 max-w-2xl px-1 sm:px-0">
        <h3 className="text-xl sm:text-2xl font-bold text-textcolor mb-2 sm:mb-3">{title}</h3>
        <p className="text-base sm:text-lg text-textcolor font-inter mb-4 sm:mb-5 leading-relaxed">
          {description}
        </p>
        <Link
          to={link}
          onClick={goTop}
          className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 border-2 border-textcolor rounded-full text-textcolor text-sm sm:text-base font-semibold hover:bg-textcolor hover:text-background transition-colors"
        >
          View Project
        </Link>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="relative px-6 sm:px-24 py-16 sm:py-20 bg-background text-textcolor font-custom scroll-mt-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={fadeVariants}
    >
      <div className="absolute top-0 left-[5%] right-[5%] h-px bg-separator"></div>
      <div className="absolute bottom-0 left-[5%] right-[5%] h-px bg-separator"></div>

      <h2 className="text-2xl sm:text-4xl font-bold mb-8 sm:mb-12 pl-0 sm:pl-12">Selected Projects</h2>

      <ProjectCard
        title="SYBL Front-End and Functionality Revamp"
        description="Led a 10-week redesign cutting onboarding confusion by 72% and boosting sales follow-up by 30%."
        link="/projects/sybl-revamp"
        img1={Proj1Preview1}
        img2={Proj1Preview2}
      />

      <ProjectCard
        title="Sensible Social"
        description="Social media designed to serve you and bolster your mental health, not leave you drained and cynical. Coming soon."
        link="/projects/wip1"
        img1={Proj2Preview1}
        img2={Proj2Preview2}
      />
    </motion.section>
  );
};

export default Projects;
