import { useNavigate } from "react-router-dom";

import { formatCurrency } from "@/utils/currency";
import { AnimatedCard } from "@/components/Elements/AnimatedCard";

const AccountEntry = ({ account, loading }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/accounts/${account._id}`);
  };

  return (
    <AnimatedCard onClick={handleClick}>
      <div>
        <p className="text-2xl">{account.name}</p>
        <p className="text-md text-gray-400">
          {account.subtype} - {account.mask}
        </p>
      </div>
      <div className="flex justify-end flex-grow items-center">
        <p className="text-3xl">{formatCurrency(account.balances.current)}</p>
      </div>
    </AnimatedCard>
  );
};

export default AccountEntry;
