import { ProgressBar } from "@/components/Charts/ProgressBar";

export const BudgetProgressBar = ({ budget }) => {
  const currentAmount = budget.currentAmount ? budget.currentAmount : 0;
  const goal = budget.goal ? budget.goal : 0;
  const percentComplete = (currentAmount / goal) * 100;

  const color = () => {
    let color = "green";
    if (percentComplete > 100) {
      color = "red";
    } else if (percentComplete >= 90 && percentComplete < 100) {
      color = "yellow";
    }
    return color;
  };

  return (
    <ProgressBar
      percentComplete={percentComplete}
      color={"bg-gradient-to-r from-emerald-300 to-emerald-600"}
    />
  );
};
