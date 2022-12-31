import { ProgressBar } from "@/components/Charts/ProgressBar";

export const BudgetProgressBar = ({ goal, spent }) => {
  const percentComplete = (spent / goal) * 100;

  return <ProgressBar percentComplete={percentComplete} />;
};
