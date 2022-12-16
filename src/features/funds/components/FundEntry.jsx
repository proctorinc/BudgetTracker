import { AnimatedCard } from "@/components/Elements/AnimatedCard";
import { formatCurrency } from "@/utils/currency";
import { useNavigate } from "react-router-dom";

const FundEntry = ({ fund }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (fund._id !== "Unallocated") {
      navigate(`/funds/${fund._id}`);
    }
  };

  return (
    <AnimatedCard onClick={handleClick}>
      <div>
        <p className="text-xl">{fund.name}</p>
      </div>
      <div className="flex justify-end flex-grow">
        <p className="text-xl">{formatCurrency(fund.initial_amount)}</p>
      </div>
    </AnimatedCard>
  );
};

export default FundEntry;
