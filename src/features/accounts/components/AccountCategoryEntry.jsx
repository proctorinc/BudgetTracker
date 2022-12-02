import { capitalizeFirstLetter } from "../../../utils";
import { formatCurrency } from "../../../utils/currency";
import AccountEntry from "./AccountEntry";

const AccountCategoryEntry = ({ category, accounts }) => {
  const accountEntries = accounts?.accounts.map((account) => (
    <AccountEntry key={account._id} account={account} />
  ));

  const subtotal = formatCurrency(accounts?.subtotal);
  const categoryHeading = capitalizeFirstLetter(category);

  return (
    <div className="flex flex-col gap-2 pt-5">
      <h3 className="text-3xl">
        {categoryHeading}: {subtotal}
      </h3>
      {accountEntries}
    </div>
  );
};

export default AccountCategoryEntry;
