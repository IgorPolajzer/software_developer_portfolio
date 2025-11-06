import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Topic({ title, subtitle, text, image, custom }) {
  const controls = useAnimation();
  const { ref, inView } = useInView({ rootMargin: "-50px 0px" });
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 525);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 525);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  // If a custom component is provided, render it directly
  if (custom) {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isSmallScreen ? "visible" : controls}
        variants={variants}
        className="w-11/12 md:w-4/5 mx-auto mb-10"
      >
        {custom}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isSmallScreen ? "visible" : controls}
      variants={variants}
      className="md:w-3/4 mx-auto mb-10 rounded-3xl bg-white/5 shadow-lg overflow-hidden flex flex-col md:flex-row items-center"
    >
      {/* Optional Image */}
      {image && (
        <div className="md:w-1/3 w-full flex justify-center md:justify-center p-4">
          <img
            src={image}
            alt="topic"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white/50"
          />
        </div>
      )}

      {/* Content */}
      <div className={`flex flex-col ${image ? "md:w-2/3" : "w-full"} p-6 text-center md:text-center`}>
        {title && <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">{title}</h1>}
        {subtitle && <h2 className="text-xl md:text-2xl italic text-blue-200 mt-1">{subtitle}</h2>}
        {text && <p className="mt-4 text-lg md:text-xl font-semibold italic text-gray-300">{text}</p>}
      </div>
    </motion.div>
  );
}

export default Topic;
