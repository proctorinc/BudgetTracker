import { motion } from "framer-motion";

export const ProgressBar = ({ percentComplete, color }) => {
  const progressPercent = percentComplete > 100 ? 100 : percentComplete;
  const animationDuration = 1 * (progressPercent / 100);

  return (
    <div className="w-full h-2 bg-gray-300 rounded-lg">
      <motion.div
        initial={{ width: "0%" }}
        animate={{
          width: `${progressPercent}%`,
          transition: {
            duration: animationDuration,
            ease: "easeIn",
          },
        }}
        className={`${color ? color : "bg-blue-300"} h-2 rounded-lg  w-full`}
      />
    </div>
  );
};
