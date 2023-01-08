import { capitalizeFirstLetter } from "@/utils";
import { formatCurrency } from "@/utils/currency";
import { AnimatedList } from "@/components/Elements/AnimatedList";

import AccountEntry from "./AccountEntry";

const AccountCategoryEntry = ({ category, accountData, isLoading }) => {
  const accountEntries = accountData?.accounts.map((account) => (
    <AccountEntry key={account._id} account={account} />
  ));

  const subtotal = formatCurrency(accountData?.subtotal);
  const categoryHeading = capitalizeFirstLetter(category);

  return (
    <div className="flex flex-col gap-2 pb-5">
      <h3 className="pl-1 text-3xl">
        {categoryHeading}: {subtotal}
      </h3>
      <AnimatedList isLoading={isLoading}>{accountEntries}</AnimatedList>
    </div>
  );
};

export default AccountCategoryEntry;
