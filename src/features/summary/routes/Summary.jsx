import { useNavigate, useParams } from "react-router-dom";

import { Layout } from "@/components/Layout";
import { formatCurrency } from "@/utils/currency";
import { capitalizeFirstLetter } from "@/utils";
import { ActiveMonthsListBox } from "@/components/Form/ListBoxInput/ActiveMonthsListBox";

import { useMonthlySummary } from "../hooks/useMonthlySummary";
import { useActiveMonths } from "../hooks/useActiveMonths";

export const Summary = () => {
  const { month, year } = useParams();
  const date = { month, year };
  const navigate = useNavigate();
  const summaryQuery = useMonthlySummary(date);
  const monthsQuery = useActiveMonths();

  const handleSelectedMonth = (date) => {
    navigate(`/summary/${date.month}/${date.year}`);
  };

  if (monthsQuery.error) {
    return <div>Error!!!</div>;
  }

  return (
    <Layout
      title={`${capitalizeFirstLetter(date.month)} ${date.year}`}
      subtitle="Summary"
      isLoading={monthsQuery.isLoading}
    >
      <ActiveMonthsListBox initialMonth={date} onSelect={handleSelectedMonth} />
      {summaryQuery.data && (
        <>
          <div className="pt-5">
            <h2 className="text-5xl pb-2">Overall</h2>
            <h2>Cash balance at end of month: $85,000 </h2>
            <h2>Increased from last month +$3554</h2>
            <div className="flex gap-2 pb-2">
              <div className="flex justify-center gap-6 border bg-gray-200 border-gray-200 py-10 rounded-md w-1/2">
                <div className="border-8 border-gray-800 border-r-white rounded-full animate-full p-2 h-16 w-16"></div>
                <div className="flex flex-col justify-center text-center">
                  <p className="text-xl font-extralight">Income</p>
                  <p className="text-lg font-bold">
                    +{formatCurrency(summaryQuery.data.income)}
                  </p>
                </div>
              </div>
              <div className="flex justify-center gap-6 border bg-gray-200 border-gray-200 py-10 rounded-md w-1/2">
                <div className="border-8 border-gray-800 border-l-white border-t-white border-b-white rounded-full animate-full p-2 h-16 w-16"></div>
                <div className="flex flex-col justify-center text-center">
                  <p className="text-xl font-extralight">Expenses</p>
                  <p className="text-lg font-bold">
                    -{formatCurrency(summaryQuery.data.expenses)}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-2 justify-center text-center bg-gray-200 border-gray-200 p-3 rounded-md mb-10">
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
          {/* <SummaryStat /> */}
          <div className="pb-10">
            <h2 className="text-5xl pb-2">Budgets</h2>
            <h2>Budget Balance at end of month: +$542</h2>
            <h2>Increased from last month +$54</h2>
            <div className="flex gap-2 pb-2">
              <div className="flex gap-8 border bg-gray-200 border-gray-200 p-10 rounded-md flex-grow justify-center">
                <div className="border-8 border-gray-800 border-l-white border-t-white border-b-white rounded-full animate-full p-2 h-24 w-24"></div>
                <div className="flex flex-col gap-3 justify-center">
                  <p className="text-xl font-bold">
                    <span className="font-extralight">Goal:</span>{" "}
                    {formatCurrency(summaryQuery.data.budget.goal)}
                  </p>
                  <p className="text-xl font-bold">
                    <span className="font-extralight">Spent:</span> -
                    {formatCurrency(summaryQuery.data.budget.spent)}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 border bg-gray-200 border-gray-200 p-3 rounded-md w-fit">
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
          </div>
          <div className="">
            <h2 className="text-5xl pb-2">Funds</h2>
            <h2>Funds Balance at end of month: $38046</h2>
            <h2>Increased from last month +$2306</h2>
            <div className="flex gap-2 pb-2">
              <div className="flex gap-8 border bg-gray-200 border-gray-200 p-10 rounded-md flex-grow justify-center">
                <div className="border-8 border-gray-800 border-l-white border-t-white border-b-white rounded-full animate-full p-2 h-24 w-24"></div>
                <div className="flex flex-col gap-3 justify-center">
                  <p className="text-xl font-bold">
                    <span className="font-extralight">Added:</span> +
                    {formatCurrency(summaryQuery.data.funds.added)}
                  </p>
                  <p className="text-xl font-bold">
                    <span className="font-extralight">Spent:</span> -
                    {formatCurrency(summaryQuery.data.funds.removed)}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 border bg-gray-200 border-gray-200 p-3 rounded-md w-fit">
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
            </div>
          </div>
        </>
      )}
    </Layout>
  );
};
