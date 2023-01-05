import { fetchQuery } from "@/lib/fetch";

export const getUserProfile = async () => {
  return fetchQuery({
    endpoint: "/auth/me",
    method: "GET",
  });
};
