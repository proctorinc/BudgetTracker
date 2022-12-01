import useAccounts from "../../../hooks/useAccounts";
import AccountEntry from "./AccountEntry";

const AccountList = () => {
  const { accounts } = useAccounts();

  const accountEntries = accounts.map((account) => {
    return <AccountEntry key={account.account_id} account={account} />;
  });

  return <div role="accounts-list">{accountEntries}</div>;
};

export default AccountList;
