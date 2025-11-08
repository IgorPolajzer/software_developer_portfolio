import React, {useEffect, useState} from "react";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";

function AnimationWrapper({card}) {
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

    return (
        <>
            <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={isSmallScreen ? "visible" : controls}
                        variants={variants}
                        className="md:w-3/4 mx-auto mb-10 rounded-3xl bg-white/5 shadow-lg overflow-hidden flex flex-col md:flex-row items-center border-2 border-[var(--color-text-base)]"
                    >
                {card}
            </motion.div>
        </>
    );
}

export default AnimationWrapper;
