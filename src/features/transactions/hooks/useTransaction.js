import { useEffect, useState } from "react";
import { getTransaction } from "../api/getTransaction";

const useTransaction = ({ transactionId }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    getTransaction(transactionId)
      .then(setData)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, []);

  return {
    transaction: data?.transaction,
    isLoading,
    error,
  };
};

export default useTransaction;
