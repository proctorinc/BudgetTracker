import { capitalizeFirstLetter } from "@/utils";
import { formatCurrency } from "@/utils/currency";
import { Loader } from "@/components/Elements/Loader";
import { AnimatedList } from "@/components/Elements/AnimatedList";
import { AnimatedCard } from "@/components/Elements/AnimatedCard";

import AccountEntry from "./AccountEntry";

const AccountCategoryEntry = ({ category, accountData, isLoading, error }) => {
  const accountEntries = accountData?.accounts.map((account) => (
    <AccountEntry key={account._id} account={account} />
  ));

  const subtotal = formatCurrency(accountData?.subtotal);
  const categoryHeading = capitalizeFirstLetter(category);

  if (error) {
    return <div>Error {error}</div>;
  }

  return (
    <div className="flex flex-col gap-2 pb-5">
      <h3 className="text-3xl">
        {categoryHeading}: {subtotal}
      </h3>
      {accountEntries ? (
        <AnimatedList>{accountEntries}</AnimatedList>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default AccountCategoryEntry;
