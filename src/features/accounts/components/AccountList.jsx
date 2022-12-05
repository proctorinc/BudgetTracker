import useAccounts from "../hooks/useAccounts";
import AccountCategoryEntry from "./AccountCategoryEntry";

const AccountList = () => {
  const categories = ["cash", "credit", "investment", "loan"];
  const { accounts, isLoading, error } = useAccounts();

  if (error) {
    return (
      <div className="p-2 text-xl">
        Error Loading Accounts. Please try again
      </div>
    );
  }

  const categoryEntries = categories.map((category) => (
    <AccountCategoryEntry
      key={category}
      category={category}
      accounts={accounts ? accounts[category] : null}
      loading={isLoading}
      error={error}
    />
  ));

  return <>{categoryEntries}</>;
  // <>
  //   <AccountCategoryEntry
  //     category="cash"
  //     accounts={cashAccounts}
  //     loading={isLoading}
  //     error={error}
  //   />
  //   <AccountCategoryEntry
  //     category="credit"
  //     accounts={creditAccounts}
  //     loading={isLoading}
  //     error={error}
  //   />
  //   <AccountCategoryEntry
  //     category="investment"
  //     accounts={investmentAccounts}
  //     loading={isLoading}
  //     error={error}
  //   />
  //   <AccountCategoryEntry
  //     category="loan"
  //     accounts={loanAccounts}
  //     loading={isLoading}
  //     error={error}
  //   />
  // </>
};

export default AccountList;
