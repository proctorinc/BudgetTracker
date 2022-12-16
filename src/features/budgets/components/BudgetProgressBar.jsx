import { ProgressBar } from "@/components/Charts/ProgressBar";

export const BudgetProgressBar = ({ budget }) => {
  const percentComplete = (budget.currentAmount / budget.goal) * 100;

  const calculateColor = () => {
    let color = "bg-emerald-400";
    if (percentComplete > 100) {
      color = "bg-red-400";
    } else if (percentComplete >= 90 && percentComplete < 100) {
      color = "bg-yellow-400";
    }
    return color;
  };

  return (
    <ProgressBar percentComplete={percentComplete} color={calculateColor()} />
  );
};
