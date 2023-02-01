import { motion } from "framer-motion";

export const ProgressBar = ({ percentComplete }) => {
  let progressPercent = percentComplete;
  if (percentComplete > 100) {
    progressPercent = 100;
  } else if (percentComplete < 0) {
    progressPercent = 0;
  }

  let color = "emerald";
  if (progressPercent >= 100) {
    color = "red";
  } else if (progressPercent >= 85 && progressPercent <= 100) {
    color = "orange";
  }
  const colorStart = `from-${color}-300`
  const colorEnd = `to-${color}-600`

  return (
    <div className="w-full h-2 bg-gray-300 rounded-lg">
      <motion.div
        initial={{ width: "0%" }}
        animate={{
          width: `${progressPercent}%`,
          transition: {
            duration: 1,
            ease: "easeInOut",
          },
        }}
        className={`${
          color
            ? `bg-gradient-to-r ${colorStart} ${colorEnd}`
            : "bg-blue-300"
        } h-2 rounded-lg  w-full`}
      />
    </div>
  );
};
