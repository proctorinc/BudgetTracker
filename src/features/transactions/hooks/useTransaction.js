import { useQuery } from "react-query";

import { getTransaction } from "../api/getTransaction";

const useTransaction = ({ transactionId }) => {
  return useQuery(`transaction/${transactionId}`, () =>
    getTransaction(transactionId)
  );
};

export default useTransaction;
