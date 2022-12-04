import { getLinkTokenForUser } from "../features/bank_link";
import useFetch from "./useFetch";

const useLinkToken = () => {
  const { data, isLoading, error } = useFetch({
    query: getLinkTokenForUser,
  });

  return {
    linkToken: !isLoading && !error ? data.link_token : null,
  };
};

export default useLinkToken;
