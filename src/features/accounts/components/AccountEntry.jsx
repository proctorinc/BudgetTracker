import { useNavigate } from "react-router-dom";

import { formatCurrency } from "@/utils/currency";
import { AnimatedCard } from "@/components/Elements/AnimatedCard";

const AccountEntry = ({ account }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/accounts/${account._id}`);
  };

  return (
    <AnimatedCard onClick={handleClick}>
      <div className="p-1 sm:p-0">
        <p className="text-xl">{account.name}</p>
        <p className="text-sm text-gray-400">
          {account.subtype} - {account.mask}
        </p>
      </div>
      <div className="flex justify-end flex-grow items-center">
        <p className="text-2xl">{formatCurrency(account.balances.current)}</p>
      </div>
    </AnimatedCard>
  );
};

export default AccountEntry;
