import { useEffect, useState } from "react";
import { getLinkTokenForUser } from "../features/bank_link/api/getLinkTokenForUser";
import useUser from "./useUser";

const useLinkToken = () => {
  const [linkToken, setLinkToken] = useState();
  const { user } = useUser();

  useEffect(() => {
    getLinkTokenForUser(user).then(setLinkToken);
  }, []);

  return {
    linkToken,
  };
};

export default useLinkToken;
