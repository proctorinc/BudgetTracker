import { useMutation } from "react-query";

import { queryClient } from "@/lib/react-query";

import { createBudget } from "../api/createBudget";

export const useCreateBudget = () => {
  return useMutation({
    onMutate: () => {
      queryClient.cancelQueries(["create", "budget"]);
      queryClient.setQueryData(["create", "budget"]);
    },
    onError: (context) => {},
    onSuccess: (data) => {},
    mutationFn: ({ name, icon, goal }) => createBudget({ name, icon, goal }),
  });
};
