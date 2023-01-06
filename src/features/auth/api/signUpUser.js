import { fetchQuery } from "@/lib/fetch";

export const signUpUser = async (email, password, confirmPassword) => {
  return fetchQuery({
    endpoint: `/auth/signup`,
    method: "POST",
    body: {
      email,
      password,
      confirmPassword,
    },
  });
};
