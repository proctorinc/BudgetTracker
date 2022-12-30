import { useMutation } from "react-query";

import { queryClient } from "@/lib/react-query";

import { updateTransaction } from "../api/updateTransaction";

export const useUpdateTransaction = ({ transactionId }) => {
  return useMutation({
    onMutate: (newTransaction) => {
      queryClient.cancelQueries(["transaction", transactionId]);

      const previousTransaction = queryClient.getQueryData([
        "transaction",
        transactionId,
      ]);

      queryClient.setQueryData(
        ["transaction", transactionId],
        newTransaction.data
      );

      return { previousTransaction };
    },
    onError: (context) => {
      if (context?.previousTransactions) {
        queryClient.setQueryData(
          ["transaction", transactionId],
          context.previousTransactions
        );
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["transaction", transactionId]);
      queryClient.invalidateQueries(["transactions"]);
      queryClient.invalidateQueries(["transactions"]);
    },
    mutationFn: ({ ...updateItems }) =>
      updateTransaction({ transactionId, ...updateItems }),
  });
};
