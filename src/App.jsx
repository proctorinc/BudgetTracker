import "./styles/index.css";
import AccountList from "./features/accounts/components/AccountList";
import AccountsBalance from "./features/accounts/components/AccountsTotalBalance";
import LinkBankButton from "./features/bank_link/components/LinkBankButton";

function App() {
  return (
    <div className="App">
      <AccountsBalance />
      <AccountList />
    </div>
  );
}

export default App;
