export const SummaryStat = ({ title, firstStat, secondStat, thirdStat }) => {
  return (
    <div className="pb-10">
      <h2 className="text-3xl pb-2">Budgets:</h2>
      <div className="flex gap-2 pb-2">
        <div className="flex gap-8 border bg-gray-200 border-gray-200 p-3 rounded-md flex-grow justify-center">
          <div className="border-8 border-gray-800 border-l-white border-t-white border-b-white rounded-full animate-full p-2 h-24 w-24"></div>
          <div className="flex flex-col justify-center">
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
  );
};
