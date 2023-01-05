import { useMutation } from "react-query";

import { queryClient } from "@/lib/react-query";

import { loginWithEmailAndPassword } from "../api/loginWithEmailAndPassword";
import { getUserProfile } from "../api/getUserProfile";

const loginAndFetchProfile = async ({ email, password }) => {
  await loginWithEmailAndPassword(email, password);
  return await getUserProfile();
};

export const useLoginAndFetchProfile = () => {
  return useMutation({
    onMutate: (result) => {
      queryClient.cancelQueries(["login"]);

      queryClient.setQueryData(["login"], result.data);
    },
    onError: (context) => {},
    onSuccess: () => {},
    mutationFn: ({ email, password }) =>
      loginAndFetchProfile({ email, password }),
  });
};
