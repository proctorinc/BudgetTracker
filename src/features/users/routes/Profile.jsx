import { UserCircleIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

import { AnimatedCard } from "@/components/Elements/AnimatedCard";
import { AnimatedList } from "@/components/Elements/AnimatedList";
import { Layout } from "@/components/Layout";
import useAuth from "@/features/auth/hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();

  return (
    <Layout title="Profile" size="sm">
      <motion.div
        className="flex justify-center"
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
          transition: {
            duration: 1,
            type: "spring",
            stiffness: 80,
          },
        }}
      >
        <motion.div
          whileHover={{
            opacity: 1,
            scale: 1.2,
          }}
          whileTap={{ scale: 0.95 }}
        >
          <UserCircleIcon className="h-40 text-gray-800" />
        </motion.div>
      </motion.div>
      <AnimatedList>
        <AnimatedCard>
          <div className="flex gap-1">
            <h3 className="text-2xl font-extralight">Email:</h3>
            <p className="text-2xl font-extralight">{user?.email}</p>
          </div>
        </AnimatedCard>
      </AnimatedList>
    </Layout>
  );
};

export default Profile;
