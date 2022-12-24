import { Calendar } from "phosphor-react";

import TransactionUpdateDetail from "./TransactionDetail";

const DateDetail = ({ date }) => {
  const formattedDate = new Date(date).toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <TransactionUpdateDetail
      label={"Date"}
      icon={<Calendar size={25} weight="fill" />}
      onClick={() => console.log("Clicked on date detail")}
    >
      <p>{formattedDate}</p>
    </TransactionUpdateDetail>
  );
};

export default DateDetail;
