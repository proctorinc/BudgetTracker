import { IconFromText } from "@/components/Misc/IconFromText/IconFromText";
import { motion } from "framer-motion";

export const AnimatedDetailHeader = ({
  title,
  titleIcon,
  subtitle,
  subtitleIcon,
}) => {
  return (
    <div className="flex flex-col items-center p-3 text-center">
      <motion.div
        className="flex items-center gap-2 p-2"
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
        {titleIcon && (
          <div className="border-2 border-gray-800 rounded-full p-2">
            <IconFromText text={titleIcon} className="h-12 text-gray-800" />
          </div>
        )}
        <h1 className="text-7xl font-extrabold">{title}</h1>
      </motion.div>
      <motion.div
        className="flex items-center gap-2 p-2"
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
          <div className="border-2 border-gray-800 rounded-full p-2">
            <IconFromText text={subtitleIcon} className="h-8 text-gray-800" />
          </div>
        )}
        <h3 className="text-5xl font-extralight">{subtitle}</h3>
      </motion.div>
    </div>
  );
};
