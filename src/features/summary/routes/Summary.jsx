import { useNavigate, useParams } from "react-router-dom";

import { Layout } from "@/components/Layout";
import { formatCurrency } from "@/utils/currency";
import { capitalizeFirstLetter } from "@/utils";
import { ActiveMonthsListBox } from "@/components/Form/ListBoxInput/ActiveMonthsListBox";
import { AnimatedCard } from "@/components/Elements/AnimatedCard";

import { useMonthlySummary } from "../hooks/useMonthlySummary";
import { useActiveMonths } from "../hooks/useActiveMonths";
import { SummaryStat } from "../components/SummaryStat";
import { formatPercent } from "../../../utils";
import { LoadingScreen } from "@/components/Misc";

export const Summary = () => {
  const { month, year } = useParams();
  const date = { month, year };
  const navigate = useNavigate();
  const summaryQuery = useMonthlySummary(date);
  const monthsQuery = useActiveMonths();

  const handleSelectedMonth = (date) => {
    navigate(`/summary/${date.month}/${date.year}`);
  };

  if (monthsQuery.isError) {
    return <div>Error!!!</div>;
  }

  return (
    <Layout
      title={`${capitalizeFirstLetter(date.month)} ${date.year}`}
      subtitle="Summary"
      isLoading={monthsQuery.isLoading || summaryQuery.isLoading}
    >
      <ActiveMonthsListBox initialMonth={date} onSelect={handleSelectedMonth} />
      <>
        <div className="py-5">
          <h2 className="text-5xl pb-2">Spending</h2>
          <h3 className="text-3xl font-extralight">
            Leftover:{" "}
            {formatCurrency(
              summaryQuery.data?.income - summaryQuery.data?.expenses
            )}
          </h3>
          <div className="flex gap-2 border border-gray-200 bg-gray-200 text-gray-500 rounded-md px-3 w-fit my-2">
            <p>Increased +$xxx.xx from November</p>
          </div>
          <div className="flex gap-2 pb-2">
            <AnimatedCard>
              <div className="p-5">
                <div className="border-8 border-gray-800 border-r-gray-300 rounded-full animate-full p-2 h-16 w-16"></div>
              </div>
              <div className="flex flex-col justify-center text-center">
                <p className="text-xl font-extralight">Income</p>
                <p className="text-lg font-bold">
                  {formatCurrency(summaryQuery.data?.income)}
                </p>
              </div>
            </AnimatedCard>
            <AnimatedCard>
              <div className="p-5">
                <div className="border-8 border-gray-800 border-l-gray-300 border-t-gray-300 border-b-gray-300 rounded-full animate-full p-2 h-16 w-16"></div>
              </div>
              <div className="flex flex-col justify-center text-center">
                <p className="text-xl font-extralight">Expenses</p>
                <p className="text-lg font-bold">
                  -{formatCurrency(summaryQuery.data?.expenses)}
                </p>
              </div>
            </AnimatedCard>
          </div>
        </div>
        <div className="pb-5">
          <h2 className="text-5xl pb-2">Budgets:</h2>
          <h3 className="text-3xl font-extralight">
            Leftover:{" "}
            {formatCurrency(
              summaryQuery.data?.budget.goal - summaryQuery.data?.budget.spent
            )}
          </h3>
          <div className="flex gap-2 border border-gray-200 bg-gray-200 text-gray-500 rounded-md px-3 w-fit my-2">
            <p>Increased +$xx.xx from November</p>
          </div>
          <SummaryStat
            firstHeader="Goal"
            firstStat={formatCurrency(summaryQuery.data?.budget.goal)}
            secondHeader="Spent"
            secondStat={formatCurrency(summaryQuery.data?.budget.spent)}
            thirdHeader="Budget Spent"
            thirdStat={formatPercent(
              summaryQuery.data?.budget.spent,
              summaryQuery.data?.budget.goal
            )}
          />
        </div>
        <div className="pb-5">
          <h2 className="text-5xl pb-2">Funds:</h2>
          <h3 className="text-3xl font-extralight">
            Total Balance: $38,046.00
          </h3>
          <div className="flex gap-2 border border-gray-200 bg-gray-200 text-gray-500 rounded-md px-3 w-fit my-2">
            <p>Increased +$x,xxx.xx from November</p>
          </div>
          <SummaryStat
            firstHeader="Added"
            firstStat={formatCurrency(summaryQuery.data?.funds.added)}
            secondHeader="Spent"
            secondStat={formatCurrency(summaryQuery.data?.funds.removed)}
            thirdHeader="Increased"
            thirdStat={formatPercent(
              summaryQuery.data?.funds.added - summaryQuery.data?.funds.removed,
              summaryQuery.data?.funds.total
            )}
          />
        </div>
        {/* <div>
          <h2 className="text-5xl pb-2">Accounts</h2>
          <h3 className="text-3xl font-extralight">Cash Balance: $xx,xxx.xx</h3>
          <div className="flex gap-2 border border-gray-200 bg-gray-200 text-gray-500 rounded-md px-3 w-fit my-2">
            <p>Increased +$x,xxx.xx from November</p>
          </div>
          <h3 className="text-3xl font-extralight">
            Investment Balance: $xxx,xxx.xx
          </h3>
          <div className="flex gap-2 border border-gray-200 bg-gray-200 text-gray-500 rounded-md px-3 w-fit my-2">
            <p>Increased $xxx.xx from November</p>
          </div>
          <h3 className="text-3xl font-extralight">Loans Balance: $0.00</h3>
          <div className="flex gap-2 border border-gray-200 bg-gray-200 text-gray-500 rounded-md px-3 w-fit my-2">
            <p>No change since last month</p>
          </div>
        </div> */}
      </>
    </Layout>
  );
};
