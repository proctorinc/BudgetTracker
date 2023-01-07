import { motion } from "framer-motion";

export const Form = ({ onSubmit, error, children }) => {
  return (
    <>
      {error && (
        <motion.div
          className="text-center py-1 border border-gray-300 bg-gray-200 text-gray-500 rounded-md mb-5"
          initial={{ scaleX: 0 }}
          animate={{
            scaleX: 1,
            transition: {
              duration: 1,
              type: "spring",
              stiffness: 80,
            },
          }}
        >
          {error}
        </motion.div>
      )}
      <form className="flex flex-col gap-3" onSubmit={onSubmit}>
        {children}
      </form>
    </>
  );
};
