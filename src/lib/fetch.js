import { DB_URL } from "../config";

export const fetchQuery = async ({ endpoint, method, body }) => {
  return fetch(DB_URL + endpoint, {
    method: method ? method : "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : null,
    credentials: "include",
  }).then((response) => response.json());
};
