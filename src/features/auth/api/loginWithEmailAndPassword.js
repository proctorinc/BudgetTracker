import { fetchQuery } from "@/lib/fetch";

export const loginWithEmailAndPassword = async (email, password) => {
  return fetchQuery({
    endpoint: `/auth/login`,
    method: "POST",
    body: {
      email,
      password,
    },
  });
};
