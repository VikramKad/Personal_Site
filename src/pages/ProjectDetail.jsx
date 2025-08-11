import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";

import Proj1Hero from "../assets/Proj1-hero.png";
import Proj1Feature from "../assets/Proj1-feature.png";
import Proj1Onboarding from "../assets/Proj1-onboarding.png";
import Proj1Impact from "../assets/Proj1-impact.png";

const projectData = {
  "sybl-revamp": {
    title: "SYBL Front-End and Functionality Revamp",
    subtitle: "Driving Launch Readiness Through UX & Branding Alignment",
    images: {
      hero: Proj1Hero,
      feature: Proj1Feature,
      onboarding: Proj1Onboarding,
      impact: Proj1Impact,
    },
    description: {
      glance:
        "In 10 weeks, I led the end-to-end redesign of SYBL’s front-end, streamlining onboarding, adding critical features, and aligning the product with new branding — cutting user confusion by 72% and boosting sales follow-up interest by 30%.",
      challenge: [
        "Linqura, an insuretech startup, was preparing to launch SYBL, an AI assistant for insurance agents. I joined as a Product Management Intern just as the MVP was struggling with adoption risks:",
        "• Clunky onboarding with redundant steps and high drop-off.",
        "• Outdated UI that failed to communicate the product’s quality.",
        "• Branding in flux, with consultants delivering evolving guidelines mid-project.",
        "• Constraints: A 3-person dev team, no budget, and a launch deadline moved up by two months.",
      ],
      role: [
        "Ownership: Drove the front-end revamp across UX, UI, and feature development using an agile, sprint-based approach to adapt quickly to evolving requirements.",
        "Collaboration: Worked with 2 developers, CMO, Head of Product, and branding consultants to align on priorities.",
        "Challenge: Managed scope creep as the project expanded from UI tweaks to a full redesign while staying on schedule.",
      ],
      how: [
        "Streamlined onboarding: Removed redundant pages, cut unnecessary inputs, and optimized signup to be frictionless.",
        "Introduced three contextual suggestion prompts: A lightweight feature that became a standout, helping agents discover SYBL’s capabilities faster and adopt it naturally.",
        "Added functional features:",
        "• File upload, enabling agents to bring their own materials into SYBL’s workflow.",
        "• Mass organization account creation, simplifying onboarding for enterprise teams.",
        "• User settings, account settings, and billing management.",
        "Applied visual hierarchy and aligned UI with evolving branding to create a premium, tech-forward interface.",
        "Balanced branding vs. feasibility, making tradeoffs when consultants’ evolving designs conflicted with engineering capacity.",
        "Self-taught Figma & Photoshop to directly deliver UI designs while coordinating execution across 5 agile sprints.",
      ],
      results: [
        "72% reduction in onboarding confusion, measured through tester feedback.",
        "Testers reported higher confidence using SYBL and integrated it more seamlessly into their workflows.",
        "Sales demos using the new interface generated 30% more positive follow-up interest during pre-launch.",
        "CMO praised the redesign for “communicating the product’s quality,” enabling more effective sales conversations.",
        "Leadership gained confidence to position SYBL as a credible competitor to better-funded incumbents.",
        "The new UI foundation supports future features and scalability.",
      ],
      learnings: [
        "I learned how to navigate scope creep without losing focus, translate branding into functional product decisions, and drive alignment across stakeholders under shifting constraints.",
        "While doing this, my team and I added critical features to the product.",
        "By wearing both PM and designer hats, I helped to deliver a product that blended usability, branding, and business outcomes despite limited resources.",
      ],
    },
  },

  wip1: {
    title: "WIP",
    subtitle: "Stay tuned- More details coming soon.",
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const slideIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeIn" } },
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectData[id];

  if (!project) return <div className="p-10 font-inter">Project not found.</div>;

  const isWip = !project.images || !project.description;

  return (
    <>
      <div className="fixed inset-0 bg-white pointer-events-none z-0" aria-hidden="true" />

      <motion.section
        className="relative z-10 min-h-screen bg-white text-[#07062A] px-6 sm:px-16 pt-0 pb-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="relative max-w-4xl mx-auto text-left" variants={slideIn}>
          {/* Mobile back button (separate row so it doesn't overlap title) */}
          <div className="sm:hidden mb-4">
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 border-2 border-gray-700 rounded-full text-gray-700 font-semibold hover:bg-gray-700 hover:text-white transition-colors font-inter"
            >
              ← Back
            </button>
          </div>

          {/* Desktop back button (original absolute position) */}
          <button
            onClick={() => navigate(-1)}
            className="hidden sm:block absolute top-[8px] sm:left-[-140px] left-0 px-4 py-2 border-2 border-gray-700 rounded-full text-gray-700 font-semibold hover:bg-gray-700 hover:text-white transition-colors font-inter"
          >
            ← Back
          </button>

          <h1 className="mt-0 text-4xl sm:text-5xl font-bold mb-2 font-custom">{project.title}</h1>

          {!isWip && (
            <h2 className="text-xl sm:text-2xl text-gray-700 mb-8 font-custom">
              {project.subtitle}
            </h2>
          )}
        </motion.div>

        {isWip ? (
          <motion.div className="max-w-4xl mx-auto font-inter py-16 text-center" variants={slideIn}>
            <motion.p className="text-xl text-gray-600" variants={slideIn}>
              {project.subtitle || "Check back later for full case study."}
            </motion.p>
          </motion.div>
        ) : (
          <div className="max-w-4xl mx-auto font-inter space-y-10 leading-relaxed">
            <motion.img
              src={project.images.hero}
              alt={`${project.title} hero`}
              className="rounded-2xl shadow-lg mx-auto w-full max-w-4xl mb-8"
              variants={slideIn}
            />

            <motion.div variants={slideIn}>
              <h3 className="text-2xl font-bold font-custom mb-3">At a Glance</h3>
              <motion.p variants={slideIn}>{project.description.glance}</motion.p>
            </motion.div>

            <motion.div variants={slideIn}>
              <h3 className="text-2xl font-bold font-custom mb-3">The Challenge</h3>
              {project.description.challenge.map((item, i) => (
                <motion.p key={i} variants={slideIn}>{item}</motion.p>
              ))}
            </motion.div>

            <motion.div variants={slideIn}>
              <h3 className="text-2xl font-bold font-custom mb-3">My Role</h3>
              <ul className="list-disc list-inside space-y-2">
                {project.description.role.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div className="mb-6" variants={slideIn}>
              <motion.img
                src={project.images.feature}
                alt="Feature highlights (suggestion prompts, file upload)"
                className="rounded-2xl shadow-md mx-auto w-full max-w-4xl mb-2"
                variants={slideIn}
              />
              <p className="text-center text-sm text-gray-500 italic mb-6">
                This screen demonstrates a key part of the file upload implementation: validation to reject unsupported files.
              </p>
            </motion.div>

            <motion.div variants={slideIn}>
              <h3 className="text-2xl font-bold font-custom mb-3">How I Led the Revamp</h3>
              <ul className="list-disc list-inside space-y-2">
                {project.description.how.map((item, i) => {
                  if (item.startsWith("• ")) {
                    return <li key={i} className="list-[circle] ml-6">{item.replace("• ", "")}</li>;
                  }
                  return <li key={i}>{item}</li>;
                })}
              </ul>
            </motion.div>

            <motion.div className="mb-6" variants={slideIn}>
              <motion.img
                src={project.images.onboarding}
                alt="Streamlined onboarding flow"
                className="rounded-2xl shadow-md mx-auto w-full max-w-4xl mb-2"
                variants={slideIn}
              />
              <p className="text-center text-sm text-gray-500 italic mb-6">
                Part of the revamped onboarding flow designed to minimize confusion while maximizing ease, speed, efficiency, and security.
              </p>
            </motion.div>

            <motion.div variants={slideIn}>
              <h3 className="text-2xl font-bold font-custom mb-3">Results</h3>
              <ul className="list-disc list-inside space-y-2">
                {project.description.results.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={slideIn}>
              <h3 className="text-2xl font-bold font-custom mb-3">Impact Metrics</h3>
              <motion.img
                src={project.images.impact}
                alt="Impact metrics card"
                className="rounded-2xl mx-auto w-full max-w-2xl mb-6"
                variants={slideIn}
              />
            </motion.div>

            <motion.div variants={slideIn}>
              <h3 className="text-2xl font-bold font-custom mb-3">What I Learned</h3>
              <ul className="list-disc list-inside space-y-2">
                {project.description.learnings.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        )}
      </motion.section>
    </>
  );
};

export default ProjectDetail;
