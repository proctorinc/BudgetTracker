import "./styles/index.css";
import AccountList from "./features/accounts/components/AccountList";
import AccountsBalance from "./features/accounts/components/AccountsTotalBalance";

function App() {
  return (
    <div className="App">
      <AccountsBalance />
      <AccountList />
    </div>
  );
}

export default App;
