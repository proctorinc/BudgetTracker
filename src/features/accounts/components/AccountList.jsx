import { ACCOUNT_CATEGORIES } from "@/constants";

import AccountCategoryEntry from "./AccountCategoryEntry";

const AccountList = ({ accounts, error }) => {
  const categoryEntries = ACCOUNT_CATEGORIES.map((category) => (
    <AccountCategoryEntry
      key={category}
      accountData={accounts?.categories ? accounts.categories[category] : null}
      category={category}
      error={error}
    />
  ));

  return <>{categoryEntries}</>;
};

export default AccountList;
