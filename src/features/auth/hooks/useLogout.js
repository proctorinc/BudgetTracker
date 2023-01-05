import { useMutation } from "react-query";

import { queryClient } from "@/lib/react-query";

import { logoutUser } from "../api/logoutUser";

export const useLogout = () => {
  return useMutation({
    onMutate: () => {
      queryClient.cancelQueries(["logout"]);
      queryClient.setQueryData(["logout"]);
    },
    onError: (context) => {},
    onSuccess: () => {},
    mutationFn: logoutUser,
  });
};
