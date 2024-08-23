import { motion } from "framer-motion";
import profilePic from "../assets/kevinRushProfile.png"; // Update the image if needed

const HERO_CONTENT =
  "I am a dedicated Data Analyst with 3 years of experience in delivering impactful data-driven solutions. Proficient in Python, SQL, and AWS services, I excel at leveraging tools like Tableau, Power BI, and Excel to drive insightful analysis and optimize processes. My expertise spans developing predictive models, automating data workflows, and creating dynamic visualizations to support strategic decision-making. My goal is to harness my skills to develop innovative solutions that enhance business performance and deliver measurable results.";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h2
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Mykyta Kondratiev
            </motion.h2>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Data Analyst
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic} // Use your own profile picture if needed
              alt="Mykyta Kondratiev"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
