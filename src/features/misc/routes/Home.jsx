import { useNavigate } from "react-router-dom";
import { CurrencyDollarIcon } from "@heroicons/react/20/solid";

import { Layout } from "@/components/Layout";
import { Button } from "@/components/Elements/Button";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <Layout size="lg">
      <div className="flex flex-col gap-20 font-light py-36">
        <div className="pb-40">
          <div className="flex w-full justify-center pr-10 pb-10">
            <CurrencyDollarIcon className="h-32 text-gray-800" />
            <h1 className="text-9xl font-extrabold text-gray-800">Dink</h1>
          </div>
          <p className="text-center text-xl px-4">
            <i>
              Welcome to Dink, the financial budgeting app that{" "}
              <span className=" font-extralight">
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
        <div className="text-center">
          <h3 className="font-extrabold text-3xl py-2">
            Know what your goals are
          </h3>
          <p className="">
            Our budgeting tools make it easy to set financial goals and stay on
            track. You can create a budget based on your income and expenses,
            and see how much you have left over to save or invest. Plus, our
            savings tracker helps you see your progress towards your goals, so
            you can make adjustments along the way.
          </p>
        </div>
        <div className="text-center">
          <h3 className="font-extrabold text-3xl py-2">
            Be in charge of your finances
          </h3>
          <p>
            Dink is a{" "}
            <span className=" font-extralight">
              <u>comprehensive tool</u>
            </span>{" "}
            for managing your money. It provides a clear overview of your
            finances, so you can make informed decisions about your spending and
            saving habits. With Dink, you can take control of your money and
            achieve your financial goals. Sign up now to start using Dink and
            take control of your financial future.
          </p>
        </div>

        <div className="border-t border-gray-300" />

        <h2 className="text-center text-7xl font-extralight p-10">Features</h2>
        <div>
          <h3 className="text-5xl font-extrabold py-2">Accounts</h3>
          <div className="flex">
            <p className="w-2/3 h-32">
              With Dink, you can easily connect all of your bank accounts in one
              place. This allows you to see your current account balance, track
              your spending, and plan for your future. Dink also allows you to
              set financial goals and stay on track by creating a budget based
              on your income and expenses.
            </p>
            <div className="w-1/3"></div>
          </div>
        </div>

        <div>
          <h3 className="text-5xl text-right font-extrabold py-2">Funds</h3>
          <div className="flex">
            <div className="w-1/3"></div>
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
          <div className="flex">
            <p className="w-2/3 h-32">
              Dink's budgeting tools make it easy to set financial goals and
              stay on track. You can create a budget based on your income and
              expenses, and see how much you have left over to save or invest.
              With Dink, you can take control of your money and achieve your
              financial goals.
            </p>
            <div className="w-1/3"></div>
          </div>
        </div>

        <div className="border-t border-gray-300" />

        <div>
          <h2 className="text-center text-7xl font-extralight p-10">
            Start your financial journey
          </h2>
          <h3 className="text-center font-light text-xl py-5">
            <i>
              Are you tired of feeling stressed about your money and not being
              able to reach your financial goals?
            </i>
          </h3>
          <p>
            Dink is here to help. Our comprehensive financial budgeting app
            makes it easy to{" "}
            <span className=" font-extralight">
              <u>connect all of your bank accounts</u>
            </span>
            ,{" "}
            <span className=" font-extralight">
              <u>track your spending</u>
            </span>
            ,{" "}
            <span className=" font-extralight">
              <u>set financial goals</u>
            </span>
            , and{" "}
            <span className=" font-extralight">
              <u>see your progress</u>
            </span>{" "}
            towards those goals. With Dink, you can take control of your money
            and achieve financial success. Don't let your finances hold you back
            any longer. Sign up for Dink now and start taking control of your
            financial future.
          </p>
        </div>
        <div className="flex justify-center">
          <Button text="Sign Up" onClick={() => console.log("sign up")} />
        </div>
      </div>
    </Layout>
  );
};
