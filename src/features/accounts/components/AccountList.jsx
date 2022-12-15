import { useAccounts } from "../hooks/useAccounts";
import AccountCategoryEntry from "./AccountCategoryEntry";

const AccountList = () => {
  const categories = ["cash", "credit", "investment", "loan"];
  const accounts = useAccounts();

  console.log(accounts);

  const categoryEntries = categories.map((category) => (
    <AccountCategoryEntry
      key={category}
      accounts={!accounts.isLoading ? accounts.data.categories[category] : []}
      category={category}
      isLoading={accounts.isLoading}
      error={accounts.error}
    />
  ));

  return <>{categoryEntries}</>;
};

export default AccountList;
