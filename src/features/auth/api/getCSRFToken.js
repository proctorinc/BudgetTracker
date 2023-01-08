import { fetchQuery } from "@/lib/fetch";

export const getCSRFToken = async () => {
  return fetchQuery({
    endpoint: "/auth/csrf",
    method: "GET",
  });
};
