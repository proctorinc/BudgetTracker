import { useQuery } from "react-query";

import { getLinkTokenForUser } from "../api/getLinkTokenForUser";

const useLinkToken = () => {
  return useQuery("link_token", getLinkTokenForUser);
};

export default useLinkToken;
