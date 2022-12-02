import { useEffect, useState } from "react";
import { getFunds } from "../features/funds";
import useUser from "./useUser";

const useFunds = () => {
  const [funds, setFunds] = useState();
  const { user } = useUser();

  useEffect(() => {
    getFunds(user).then(setFunds);
  }, []);

  return {
    funds,
  };
};

export default useFunds;
