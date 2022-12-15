import "@/styles/index.css";
import { AppProvider } from "@/provider/app";
import { AppRoutes } from "./routes";
import UpdateSource from "./features/transactions/components/UpdateDetail/UpdateSource";
import { MainLayout } from "./components/Layout";
import UpdateMerchant from "./features/transactions/components/UpdateDetail/UpdateMerchant";
import { formatCurrency } from "./utils/currency";
import LinkBankButton from "./features/bank_link/components/LinkBankButton";
import CreateFund from "./features/funds/routes/CreateFund";

function App() {
  const source = {
    type: "fund",
    name: "Test Fund",
    id: "823hd023nd9d9",
  };

  const category = ["restaraunts", "eating out", "misc expenses"];

  return (
    // <MainLayout>
    //   <div className="flex flex-col items-center gap-1">
    //     <h1 className="text-6xl">{formatCurrency(43.54)}</h1>
    //     <h3>{"Papa Murphy's"}</h3>
    //     <p>{"12/02/22"}</p>
    //     <p>{category}</p>
    //     <p className="border border-black rounded-md p-1 font-thin">
    //       Transaction is pending
    //     </p>
    //   </div>
    //   <div className="flex flex-col gap-1 pt-2">
    //     <UpdateMerchant merchant={"Pizza Hut"} />
    //     <UpdateSource source={source} />
    //   </div>
    // </MainLayout>
    <AppProvider>
      <CreateFund />
      {/* <AppRoutes /> */}
    </AppProvider>
  );
}

export default App;
