import useAccounts from "@/hooks/useAccounts";
import AccountCategoryEntry from "./AccountCategoryEntry";

const AccountList = () => {
  const {
    isLoading,
    error,
    cashAccounts,
    creditAccounts,
    investmentAccounts,
    loanAccounts,
  } = useAccounts();

  return (
    <>
      <AccountCategoryEntry
        category="cash"
        accounts={cashAccounts}
        loading={isLoading}
        error={error}
      />
      <AccountCategoryEntry
        category="credit"
        accounts={creditAccounts}
        loading={isLoading}
        error={error}
      />
      <AccountCategoryEntry
        category="investment"
        accounts={investmentAccounts}
        loading={isLoading}
        error={error}
      />
      <AccountCategoryEntry
        category="loan"
        accounts={loanAccounts}
        loading={isLoading}
        error={error}
      />
    </>
  );
};

export default AccountList;
