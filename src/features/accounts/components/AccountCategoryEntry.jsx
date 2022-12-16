import AccountEntry from "./AccountEntry";
import { capitalizeFirstLetter } from "@/utils";
import { formatCurrency } from "@/utils/currency";

const AccountCategoryEntry = ({ category, accountData, isLoading, error }) => {
  const accountEntries = accountData?.accounts.map((account) => (
    <AccountEntry key={account._id} account={account} />
  ));

  const subtotal = formatCurrency(accountData?.subtotal);
  const categoryHeading = capitalizeFirstLetter(category);

  const loader = (
    <div className="flex border border-gray-600 px-4 py-2 rounded-lg">
      Loading...
    </div>
  );

  if (error) {
    return <div>Error {error}</div>;
  }

  return (
    <div className="flex flex-col gap-2 pb-5">
      <h3 className="text-3xl">
        {categoryHeading}: {isLoading ? "Loading..." : subtotal}
      </h3>
      {isLoading ? loader : accountEntries}
    </div>
  );
};

export default AccountCategoryEntry;
