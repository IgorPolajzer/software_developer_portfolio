import './../css/Topic.css';
import './../App.css';
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Topic(props) {
  const controls = useAnimation();
  const {ref, inView} = useInView({
    rootMargin: "-125px -500px 0px 0px",
  });

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 525);

  // Update screen size state on resize
  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 525);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Manage animation on inView
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: {x: "-100%", opacity: 0},
    visible: {x: 0, opacity: 1, transition: {duration: 1, ease: "easeOut"}},
  };

  let content;

  if (props.custom) {
     content = (
          <>{props.custom}</>
     );
  }
  else {
    content = (
        <>
          <div className="topic-box-title">
            <h1 className="title">{props.title}</h1>
            <h2 className="subtitle">{props.subtitle}</h2>
          </div>
          {props.image && (
              <div className="topic-box-image-box">
                <img src={props.image} alt="profile_picture" className="topic-box-image"/>
              </div>
          )}
          <div className={props.image ? "topic-box-w-image-content-box" : "topic-box-content-box"}>
            <p className="text">{props.text}</p>
          </div>
        </>
    );
  }

  return isSmallScreen ? (
    <div className="topic-box">
      {content}
    </div>
  ) : (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="topic-box"
    >
      {content}
    </motion.div>
  );
}

export default Topic;
