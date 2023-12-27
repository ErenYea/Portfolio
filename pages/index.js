import Image from "next/image";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full overflow-hidden mt-8 md:lg:xl:mt-0">
      <div className="w-full h-full mt-6 md:mt-0 bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col  justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="md:lg:xl:h2 max-w-sm xl:max-w-xl mx-auto xl:mx-0 "
          >
            Crafting Innovation Through Code <br />
            <span className="text-accent md:lg:xl:h3">
              Turning Concepts into Digital Excellence
            </span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="max-w-sm xl:max-w-xl mx-auto text-base md:text-lg text-justify xl:mx-0  xl:mb-16"
          >
            Dynamic MERN Stack Developer and Machine Learning Engineer with a
            rich background spanning over 2 years. Proficient in crafting
            solutions that seamlessly integrate the power of the MERN stack with
            cutting-edge machine learning technologies. Committed to innovation
            and continuous learning, I thrive on transforming challenges into
            opportunities. Step into my portfolio, where the intersection of
            creativity and functionality defines my digital journey.
          </motion.p>
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        <ParticlesContainer />
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit={"hidden"}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32
        lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
