import { useMutation } from "react-query";

import { queryClient } from "@/lib/react-query";

import { getUserProfile } from "../api/getUserProfile";

export const useUserProfile = () => {
  return useMutation({
    onMutate: () => {
      queryClient.cancelQueries(["me"]);

      queryClient.setQueryData(["me"]);
    },
    onError: (context) => {},
    onSuccess: () => {},
    mutationFn: getUserProfile,
  });
};
