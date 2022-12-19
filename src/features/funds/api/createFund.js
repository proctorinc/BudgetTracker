import { fetchQuery } from "@/lib/fetch";

export const createFund = async ({ name, icon }) => {
  return fetchQuery({
    endpoint: "/bank/fund/create",
    method: "POST",
    body: {
      name: name,
      icon: icon,
    },
  });
};
