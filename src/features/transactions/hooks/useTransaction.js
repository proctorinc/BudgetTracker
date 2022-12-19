import { useQuery } from "react-query";

import { getTransaction } from "../api/getTransaction";

export const useTransaction = ({ transactionId }) => {
  return useQuery(["transaction", transactionId], () =>
    getTransaction(transactionId)
  );
};
