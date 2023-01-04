import { useState } from "react";

import { capitalizeFirstLetter } from "@/utils";
import { useActiveMonths } from "@/features/summary";
import { Loader } from "@/components/Elements/Loader";

import { ListBoxInput } from ".";

export const ActiveMonthsListBox = ({ initialMonth, onSelect }) => {
  console.log(initialMonth);
  const [selectedMonth, setSelectedMonth] = useState(initialMonth);
  const monthsQuery = useActiveMonths();

  const renderMonthAndYear = ({ month, year }) => {
    return `${capitalizeFirstLetter(month)} ${year}`;
  };

  if (monthsQuery.isLoading) {
    return <Loader />;
  }

  console.log([initialMonth, ...monthsQuery.data]);

  const handleSelect = (month) => {
    setSelectedMonth(month);
    onSelect(month);
  };

  const isInitialInActiveMonths = () => {
    const truthiness = monthsQuery.data.some(
      (date) =>
        date.month === initialMonth.month && date.year === initialMonth.year
    );
    console.log(truthiness);
    return truthiness;
    // console.log(monthsQuery.data.indexOf(initialMonth));
    // return monthsQuery.data.indexOf(initialMonth);
  };

  return (
    <div className="pb-3">
      <ListBoxInput
        selected={selectedMonth}
        setSelected={handleSelect}
        choices={
          isInitialInActiveMonths()
            ? monthsQuery.data
            : [initialMonth, ...monthsQuery.data]
        }
        renderItem={renderMonthAndYear}
        itemKey={(item) => `${item.month} ${item.year}`}
      />
    </div>
  );
};
