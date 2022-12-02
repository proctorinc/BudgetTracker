import useAccounts from "../../../hooks/useAccounts";
import AccountCategoryEntry from "./AccountCategoryEntry";

const AccountList = () => {
  const { cashAccounts, creditAccounts, investmentAccounts, loanAccounts } =
    useAccounts();

  return (
    <>
      <AccountCategoryEntry category="cash" accounts={cashAccounts} />
      <AccountCategoryEntry category="credit" accounts={creditAccounts} />
      <AccountCategoryEntry
        category="investment"
        accounts={investmentAccounts}
      />
      <AccountCategoryEntry category="loan" accounts={loanAccounts} />
    </>
  );
};

export default AccountList;
