import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 mt-4 md:lg:xl:mt-0 py-36 flex items-center overflow-auto">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit={"hidden"}
              className="md:lg:xl:h2 xl:mt-12 text-xl"
            >
              My Work <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit={"hidden"}
              className="md:lg:xl:mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Specializing in machine learning and computer vision, I, Hamza,
              innovate practical solutions like the Scheduler Optimizer and RULA
              Score Detector, enhancing efficiency and safety in work
              environments.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="w-full xl:max-w-[65%]"
          >
            {/* slider */}
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
