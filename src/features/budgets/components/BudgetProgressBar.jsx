import { ProgressBar } from "@/components/Charts/ProgressBar";

export const BudgetProgressBar = ({ budget }) => {
  const percentComplete = (budget.currentAmount / budget.goal) * 100;

  const calculateColor = () => {
    let color = "bg-green-300";
    if (percentComplete > 100) {
      color = "bg-red-300";
    } else if (percentComplete >= 90 && percentComplete < 100) {
      color = "bg-yellow-300";
    }
    return color;
  };

  return (
    <ProgressBar percentComplete={percentComplete} color={calculateColor()} />
  );
};
