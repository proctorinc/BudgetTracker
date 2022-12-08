import { useParams } from "react-router-dom";

const Transaction = () => {
  const { transactionId } = useParams();
  return (
    <div>
      <h1>Transaction: {transactionId}</h1>
    </div>
  );
};

export default Transaction;
