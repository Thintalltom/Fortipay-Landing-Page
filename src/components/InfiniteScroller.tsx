/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import TestimonialCard from "../Pages/Home/TestimonialCard";
import { client } from "../Contentful";


const InfiniteScroll: React.FC = () => {
  const controls = useAnimation();
  const [testimonials, setTestimonials] = useState<any[]>([])
     const [isLoading, setIsLoading] = useState(true)
    
        useEffect(() => {
            const getValuePreposition = async () => {
                try {
                    const entries = await client.getEntries({
                        content_type:  'solutionBanner',
                    })
              
             
                    const bannertext = entries?.items?.[0]?.fields?.testimonialdata

                    if (Array.isArray(bannertext)) {
                        setTestimonials(bannertext)
                    }
                  
                } catch (error) {
                    console.log(error)
                } finally {
                    setIsLoading(false)
                }
            }
            getValuePreposition()
        }, [])
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
      {isLoading ? (
        <div className="flex gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md w-80 animate-pulse">
              <div className="h-4 bg-gray-300 rounded mb-4 w-3/4"></div>
              <div className="h-3 bg-gray-300 rounded mb-2"></div>
              <div className="h-3 bg-gray-300 rounded mb-4 w-5/6"></div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div className="h-3 bg-gray-300 rounded w-20"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default InfiniteScroll;
