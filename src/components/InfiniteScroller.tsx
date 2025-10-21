import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { testimonials } from "../Constant/Constant";
import TestimonialCard from "../Pages/Home/TestimonialCard";

const InfiniteScroll: React.FC = () => {
  const controls = useAnimation();
 const testimonialList = [...testimonials, ...testimonials, ...testimonials];
  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"], // move left
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear"
        }
      }
    });
  }, [controls]);

  return (
    <div
      style={{
        overflow: "hidden",
        width: "100%",
        background: "white",
        padding: "20px 0"
      }}
      onMouseEnter={() => controls.stop()}  // Stop on hover
      onMouseLeave={() =>
        controls.start({
          x: ["0%", "-50%"],
          transition: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear"
          }
        })
      }
    >
      <motion.div
        animate={controls}
        style={{ display: "flex", gap: "40px", width: "max-content" }}
      >
        <div className="flex gap-6 ">
          {testimonialList.map((item, index) => (
            <TestimonialCard key={index} {...item} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default InfiniteScroll;
