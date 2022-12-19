import { useState } from "react";

import { ListBoxInput } from "@/components/Form/ListBoxInput";
import { Layout } from "@/components/Layout";
import { useMonthlySummary } from "../hooks/useMonthlySummary";
import { AnimatedList } from "@/components/Elements/AnimatedList";
import { AnimatedCard } from "@/components/Elements/AnimatedCard";
import { formatCurrency } from "@/utils/currency";

export const Summary = () => {
  const [month, setMonth] = useState("December 2022");
  const summaryQuery = useMonthlySummary({ month });

  return (
    <Layout title={month} subtitle="Summary">
      <div className="py-3">
        <ListBoxInput
          selected={month}
          setSelected={setMonth}
          choices={[
            "December 2022",
            "November 2022",
            "October 2022",
            "September 2022",
            "August 2022",
          ]}
        />
      </div>
      {summaryQuery.data && (
        <>
          <h2 className="text-3xl pb-2">Total Spending:</h2>
          <div className="flex justify-between gap-2 pb-5">
            <div className="flex gap-4 border-2 bg-gray-200 border-gray-300 w-fit p-3 rounded-md">
              <div className="border-8 border-gray-800 border-r-white rounded-full animate-full p-2 h-16 w-16"></div>
              <div className="flex flex-col justify-center">
                <p className="text-xl font-extralight">Income</p>
                <p className="text-lg font-bold">
                  {formatCurrency(summaryQuery.data.income)}
                </p>
              </div>
            </div>
            <div className="flex gap-4 border-2 bg-gray-200 border-gray-300 w-fit p-3 rounded-md">
              <div className="border-8 border-gray-800 border-l-white border-t-white border-b-white rounded-full animate-full p-2 h-16 w-16"></div>
              <div className="flex flex-col justify-center">
                <p className="text-xl font-extralight">Expenses</p>
                <p className="text-lg font-bold">
                  {formatCurrency(summaryQuery.data.expenses)}
                </p>
              </div>
            </div>
            <div className="flex gap-4 border-2 bg-gray-200 border-gray-300 w-fit p-3 rounded-md">
              {/* <div className="border-8 border-gray-800 border-l-white border-t-white border-b-white rounded-full animate-full p-2 h-16 w-16"></div> */}
              <div className="flex flex-col justify-center">
                <p className="text-xl font-extralight">Leftover</p>
                <p className="text-lg font-bold">
                  {formatCurrency(
                    summaryQuery.data.income - summaryQuery.data.expenses
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* <div className="flex flex-col gap-2 pb-5">
            <h3 className="text-3xl">
              Income: {formatCurrency(summaryQuery.data.income)}
            </h3>
          </div>
          <div className="flex flex-col gap-2 pb-5">
            <h3 className="text-3xl">
              Expenses: -{formatCurrency(summaryQuery.data.expenses)}
            </h3>
          </div>
          <div className="flex flex-col gap-2 pb-5">
            <h3 className="text-3xl">
              Total Leftover:{" "}
              {formatCurrency(
                summaryQuery.data.income - summaryQuery.data.expenses
              )}
            </h3>
          </div> */}
          <div className="pb-10">
            <h2 className="text-3xl pb-2">Budgets:</h2>
            <div className="flex justify-between gap-2 pb-2">
              <div className="flex gap-4 border-2 bg-gray-200 border-gray-300 p-3 rounded-md flex-grow justify-center">
                <div className="border-8 border-gray-800 border-l-white border-t-white border-b-white rounded-full animate-full p-2 h-24 w-24"></div>
                <div className="flex flex-col justify-center">
                  <p className="text-xl font-extralight">Budget</p>
                  <p className="text-lg font-bold">
                    Goal: {formatCurrency(summaryQuery.data.budget.goal)}
                  </p>
                  <p className="text-lg font-bold">
                    Spent: -{formatCurrency(summaryQuery.data.budget.spent)}
                  </p>
                </div>
              </div>
              <div className="flex gap-4 border-2 bg-gray-200 border-gray-300 p-3 rounded-md w-fit">
                <div className="flex flex-col justify-center items-center">
                  <p>Budget Spent</p>
                  <p className="text-5xl font-extralight">
                    {(
                      (summaryQuery.data.budget.spent /
                        summaryQuery.data.budget.goal) *
                      100
                    ).toFixed(0)}
                    %
                  </p>
                </div>
              </div>
            </div>
            <AnimatedList>
              <AnimatedCard>
                Goal: {formatCurrency(summaryQuery.data.budget.goal)}
              </AnimatedCard>
              <AnimatedCard>
                Spent: -{formatCurrency(summaryQuery.data.budget.spent)}
              </AnimatedCard>
              <AnimatedCard>
                Leftover:{" "}
                {formatCurrency(
                  summaryQuery.data.budget.goal - summaryQuery.data.budget.spent
                )}
              </AnimatedCard>
            </AnimatedList>
          </div>
          <div className="">
            <h2 className="text-3xl pb-2">Funds:</h2>
            <div className="flex justify-between gap-2 pb-2">
              <div className="flex gap-4 border-2 bg-gray-200 border-gray-300 p-3 rounded-md w-fit">
                <div className="flex flex-col justify-center items-center">
                  <p>Increased</p>
                  <p className="text-5xl font-extralight">
                    +
                    {(
                      ((summaryQuery.data.funds.added -
                        summaryQuery.data.funds.removed) /
                        summaryQuery.data.funds.total) *
                      100
                    ).toFixed(0)}
                    %
                  </p>
                </div>
              </div>
              <div className="flex gap-4 border-2 bg-gray-200 border-gray-300 p-3 rounded-md flex-grow justify-center">
                <div className="border-8 border-gray-800 border-l-white border-t-white border-b-white rounded-full animate-full p-2 h-24 w-24"></div>
                <div className="flex flex-col justify-center">
                  <p className="text-xl font-extralight">Funds</p>
                  <p className="text-lg font-bold">
                    Added: +{formatCurrency(summaryQuery.data.funds.added)}
                  </p>
                  <p className="text-lg font-bold">
                    Spent: -{formatCurrency(summaryQuery.data.funds.removed)}
                  </p>
                </div>
              </div>
            </div>
            <AnimatedList>
              <AnimatedCard>
                Added: +{formatCurrency(summaryQuery.data.funds.added)}
              </AnimatedCard>
              <AnimatedCard>
                Spent: -{formatCurrency(summaryQuery.data.funds.removed)}
              </AnimatedCard>
              <AnimatedCard>
                End Total: {formatCurrency(summaryQuery.data.funds.total)}
              </AnimatedCard>
            </AnimatedList>
          </div>
        </>
      )}
    </Layout>
  );
};
