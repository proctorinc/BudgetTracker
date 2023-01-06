import { useMutation } from "react-query";

import { queryClient } from "@/lib/react-query";

import { signUpUser } from "../api/signUpUser";

export const useSignUp = () => {
  return useMutation({
    onMutate: (result) => {
      queryClient.cancelQueries(["signup"]);
      queryClient.setQueryData(["signup"], result.data);
    },
    onError: (context) => {},
    onSuccess: () => {},
    mutationFn: ({ email, password, confirmPassword }) =>
      signUpUser(email, password, confirmPassword),
  });
};
