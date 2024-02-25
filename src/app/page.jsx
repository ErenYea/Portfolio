"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4  sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-full lg:h-full lg:w-1/2 relative">
          <Image
            src="/hamza.png"
            alt=""
            fill
            className="object-contain bg-transparent"
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-full lg:h-full lg:w-1/2 mb-2 md:mb-0 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Crafting Innovation Through Code
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Dynamic MERN Stack Developer and Machine Learning Engineer with a
            rich background spanning over 3 years. Proficient in crafting
            solutions that seamlessly integrate the power of the MERN stack with
            cutting-edge machine learning technologies.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <Link
              href="/portfolio"
              className="p-4 rounded-lg ring-1 ring-black bg-black text-white"
            >
              View My Work
            </Link>
            <Link href="/contact" className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
