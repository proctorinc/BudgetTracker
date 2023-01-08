import { useMutation } from "react-query";

import { setCSRFTokenHeader } from "@/lib/axios";
import { queryClient } from "@/lib/react-query";

import { getCSRFToken } from "../api/getCSRFToken";

export const useCSRFToken = () => {
  return useMutation({
    onMutate: () => {
      queryClient.cancelQueries(["csrf"]);
      queryClient.setQueryData(["csrf"]);
    },
    onError: (context) => {},
    onSuccess: (data) => {
      console.log("Successfully got the CSRF token!");
      setCSRFTokenHeader(data.token);
    },
    mutationFn: getCSRFToken,
  });
};
