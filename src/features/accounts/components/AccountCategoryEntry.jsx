import { capitalizeFirstLetter } from "@/utils";
import { formatCurrency } from "@/utils/currency";
import AccountEntry from "./AccountEntry";

const AccountCategoryEntry = ({ category, accounts, loading }) => {
  const accountEntries = accounts?.accounts.map((account) => (
    <AccountEntry key={account._id} account={account} />
  ));

  const subtotal = formatCurrency(accounts?.subtotal);
  const categoryHeading = capitalizeFirstLetter(category);

  const loader = (
    <div className="flex border border-gray-600 px-4 py-2 rounded-lg">
      Loading...
    </div>
  );

  return (
    <div className="flex flex-col gap-2 pt-5">
      <h3 className="text-3xl">
        {categoryHeading}: {loading ? "Loading..." : subtotal}
      </h3>
      {loading ? loader : accountEntries}
    </div>
  );
};

export default AccountCategoryEntry;
