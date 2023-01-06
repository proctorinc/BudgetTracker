import { useNavigate } from "react-router-dom";
import { CurrencyDollarIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

import { Layout } from "@/components/Layout";
import { Button } from "@/components/Elements/Button";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="flex flex-col gap-20 font-light py-36">
        <div className="pb-40">
          <motion.div
            className="flex w-full justify-center pr-10 py-10"
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              transition: {
                duration: 2.0,
                type: "spring",
                stiffness: 80,
              },
            }}
          >
            <motion.div
              className="flex"
              whileHover={{
                opacity: 1,
                scale: 1.2,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <CurrencyDollarIcon className="h-32 text-gray-800" />
              <h1 className="text-9xl font-extrabold text-gray-800">Dink</h1>
            </motion.div>
          </motion.div>
          <p className="text-center text-md px-4">
            <i>
              Welcome to Dink, the financial budgeting app that{" "}
              <span className="font-extralight">
                <u>simplifies money management</u>
              </span>
              . With Dink, you can easily connect all of your bank accounts in
              one place, so you can see your current account balance, track your
              spending, and plan for your future.
            </i>
          </p>
        </div>

        <div className="border-t border-gray-300" />
        <h2 className="text-center leading-8 text-6xl font-extralight p-10">
          Why Budget?
        </h2>
        <div>
          <div className="flex justify-center">
            <img
              src="/life-management.png"
              alt="Life Management Image"
              className="w-3/5"
            />
          </div>
          <div className="text-center">
            <h3 className="font-extrabold text-3xl py-2">
              Know what your goals are
            </h3>
            <p>
              Our budgeting tools make it easy to set financial goals and stay
              on track. You can create a budget based on your income and
              expenses, and see how much you have left over to save or invest.
              Plus, our savings tracker helps you see your progress towards your
              goals, so you can make adjustments along the way.
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-center">
            <img
              src="/communication.png"
              alt="Communication Image"
              className="w-3/5"
            />
          </div>
          <div className="text-center">
            <h3 className="font-extrabold text-3xl py-2">
              Take charge of your finances
            </h3>
            <p>
              Dink is a{" "}
              <span className="font-extralight">
                <u>comprehensive tool</u>
              </span>{" "}
              for managing your money. It provides a clear overview of your
              finances, so you can make informed decisions about your spending
              and saving habits. With Dink, you can take control of your money
              and achieve your financial goals. Sign up now to start using Dink
              and take control of your financial future.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-300" />

        <h2 className="text-center text-7xl font-extralight p-10">Features</h2>
        <div>
          <h3 className="text-5xl font-extrabold py-2">Accounts</h3>
          <div className="flex gap-5 items-center font-extralight">
            <p className="w-2/3 h-32">
              With Dink, you can easily connect all of your bank accounts in one
              place. This allows you to see your current account balance, track
              your spending, and plan for your future. Dink also allows you to
              set financial goals and stay on track by creating a budget based
              on your income and expenses.
            </p>
            <div className="w-1/3">
              <img src="/media.png" alt="Media Image" className="" />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-5xl text-right font-extrabold py-2">Funds</h3>
          <div className="flex gap-5 items-center font-extralight">
            <div className="w-1/3">
              <img src="/meeting.png" alt="Meeting Image" className="" />
            </div>
            <p className="text-right w-2/3 h-32">
              Dink's savings tracker helps you see your progress towards your
              financial goals, so you can make adjustments along the way. You
              can also see how much you have left over to save or invest after
              budgeting your income and expenses.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-5xl font-extrabold py-2">Budgets</h3>
          <div className="flex gap-5 items-center font-extralight">
            <p className="w-2/3 h-32">
              Dink's budgeting tools make it easy to set financial goals and
              stay on track. You can create a budget based on your income and
              expenses, and see how much you have left over to save or invest.
              With Dink, you can take control of your money and achieve your
              financial goals.
            </p>
            <div className="w-1/3">
              <img
                src="/virtual-reality.png"
                alt="Virtual Reality Image"
                className=""
              />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300" />
        <div>
          <h2 className="text-center text-7xl font-extralight p-10">
            Start your financial journey
          </h2>
          <div className="flex justify-center">
            <img
              src="/blockchain.png"
              alt="Blockchain Image"
              className="w-3/5"
            />
          </div>
          <h3 className="text-center font-extralight text-xl py-5">
            <i>
              Are you tired of feeling stressed about your money and not being
              able to reach your financial goals?
            </i>
          </h3>
          <p>
            Dink is here to help. Our comprehensive financial budgeting app
            makes it easy to{" "}
            <span className="font-extralight">
              connect all of your bank accounts
            </span>
            , <span className="font-extralight">track your spending</span>,{" "}
            <span className="font-extralight">set financial goals</span>, and{" "}
            <span className="font-extralight">see your progress</span> towards
            those goals. With Dink, you can take control of your money and
            achieve financial success. Don't let your finances hold you back any
            longer. Sign up for Dink now and start taking control of your
            financial future.
          </p>
        </div>
        <div className="flex justify-center">
          <Button text="Sign Up" onClick={() => navigate("/signup")} />
        </div>
      </div>
    </Layout>
  );
};
