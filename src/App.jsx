import "@/styles/index.css";
import AccountList from "@/features/accounts/components/AccountList";
import AccountsBalance from "@/features/accounts/components/AccountsTotalBalance";
import { AppProvider } from "@/provider/app";

function App() {
  return (
    <AppProvider>
      <AccountsBalance />
      <AccountList />
      {/* <AppRoutes /> */}
    </AppProvider>
  );
}

export default App;
