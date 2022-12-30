import { fetchQuery } from "@/lib/fetch";

export const updateTransaction = ({ transactionId, ...updateItems }) => {
  return fetchQuery({
    method: "PUT",
    endpoint: `/bank/transaction/${transactionId}`,
    body: {
      transaction_id: transactionId,
      update: {
        ...updateItems,
      },
    },
  });
};
