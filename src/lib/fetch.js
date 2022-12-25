import { DB_URL, USER } from "../config";

export const fetchQuery = async ({ endpoint, method, body }) => {
  return fetch(DB_URL + endpoint, {
    method: method ? method : "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${USER.jwtToken}`,
    },
    body: body ? JSON.stringify(body) : null,
  }).then((response) => response.json());
};
