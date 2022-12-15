import AccountCategoryEntry from "./AccountCategoryEntry";
import { useAccounts } from "../hooks/useAccounts";
import { ACCOUNT_CATEGORIES } from "@/constants";

const AccountList = () => {
  const { data, isLoading, error } = useAccounts();

  const categoryEntries = ACCOUNT_CATEGORIES.map((category) => (
    <AccountCategoryEntry
      key={category}
      accountData={data?.categories[category]}
      category={category}
      isLoading={isLoading}
      error={error}
    />
  ));

  return <>{categoryEntries}</>;
};

export default AccountList;
