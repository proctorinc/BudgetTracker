import { Navigate, Route, Routes } from "react-router-dom";
import Transaction from "./Transaction";
import Transactions from "./Transactions";

const TransactionRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Transactions />} />
      <Route path=":transactionId" element={<Transaction />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};

export default TransactionRoutes;
