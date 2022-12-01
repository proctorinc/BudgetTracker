import "./styles/index.css";
import LinkBankButton from "./features/bank_link/components/LinkBankButton";
import AccountList from "./features/accounts/components/AccountList";
import AccountsBalance from "./features/accounts/components/AccountsBalance";

function App() {
  return (
    <div className="App">
      <AccountsBalance />
      <AccountList />
    </div>
  );
}

export default App;
