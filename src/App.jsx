import "@/styles/index.css";
import { AppProvider } from "@/provider/app";

import { AppRoutes } from "./routes";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <AppProvider>
      <Navbar />
      <AppRoutes />
      <Footer />
    </AppProvider>
  );
}

export default App;
