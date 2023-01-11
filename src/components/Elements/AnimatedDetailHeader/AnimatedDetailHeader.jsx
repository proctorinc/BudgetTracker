import { motion } from "framer-motion";
import { ArrowLeft } from "phosphor-react";

import { IconFromText } from "@/components/Misc/IconFromText/IconFromText";
import { useNavigate } from "react-router-dom";

export const AnimatedDetailHeader = ({
  title,
  titleIcon,
  subtitle,
  subtitleIcon,
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center p-5 text-center">
      <motion.div
        className="flex items-center gap-2 p-2 mr-10"
        initial={{
          y: -25,
          scale: 0.3,
        }}
        animate={{
          y: 0,
          scale: 1,
          transition: {
            duration: 0.1,
            type: "spring",
            stiffness: 50,
          },
        }}
      >
        <button onClick={() => navigate(-1)}>
          <ArrowLeft size={32} />
        </button>
        {titleIcon && (
          <div className="border-4 border-gray-800 rounded-full p-2">
            <IconFromText
              text={titleIcon}
              className="h-8 sm:h-12 text-gray-800"
            />
          </div>
        )}
        <h1 className="text-5xl sm:text-7xl font-extrabold">{title}</h1>
      </motion.div>
      <motion.div
        className="flex items-center gap-2"
        initial={{
          opacity: 0,
          y: -150,
          scale: 0.2,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.5,
            type: "spring",
            stiffness: 50,
          },
        }}
      >
        {subtitleIcon && (
          <div className="border-2 border-gray-800 rounded-full p-1 sm:p-2">
            <IconFromText
              text={subtitleIcon}
              className="h-6 sm:h-8 text-gray-800"
            />
          </div>
        )}
        <h2 className="text-2xl sm:text-5xl font-extralight">{subtitle}</h2>
      </motion.div>
    </div>
  );
};
