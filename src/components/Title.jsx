import React from "react";
import { motion } from "framer-motion";

const Title = () => {
  return (
    <div className="text-start  tracking-tight">
      {/* Main Title with Animation */}
      <motion.h1
        className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-extrabold font-['Helvetica'] z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 via-neutral-300 to-neutral-500 dark:from-neutral-400 dark:via-white dark:to-white mb-6 drop-shadow-2xl"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Welcome to GeoProfiles
      </motion.h1>

      {/* Subtitle with Animation */}
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-semibold font-['Helvetica'] text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        Discover Profiles, Explore Boundaries
      </motion.h2>
    </div>
  );
};

export default Title;
