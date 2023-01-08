import { useMutation } from "react-query";

import { queryClient } from "@/lib/react-query";

import { createFund } from "../api/createFund";

export const useCreateFund = () => {
  return useMutation({
    onMutate: () => {
      queryClient.cancelQueries(["create", "fund"]);
      queryClient.setQueryData(["create", "fund"]);
    },
    onError: (context) => {},
    onSuccess: (data) => {},
    mutationFn: ({ name, icon }) => createFund({ name, icon }),
  });
};
