import { ACCOUNT_CATEGORIES } from "@/constants";

import AccountCategoryEntry from "./AccountCategoryEntry";

const AccountList = ({ accounts, isLoading, error }) => {
  const categoryEntries = ACCOUNT_CATEGORIES.map((category) => (
    <AccountCategoryEntry
      key={category}
      accountData={accounts?.categories ? accounts.categories[category] : null}
      category={category}
      isLoading={isLoading}
    />
  ));

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <>{categoryEntries}</>;
};

export default AccountList;
