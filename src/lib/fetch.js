import { axios } from "@/lib/axios";

export const fetchQuery = async ({ endpoint, method, body }) => {
  if (method === "POST") {
    return axios.post(endpoint, body);
  } else if (method === "PUT") {
    return axios.put(endpoint, body);
  } else if (method === "DELETE") {
    return axios.delete(endpoint, body);
  } else {
    return axios.get(endpoint);
  }
};
