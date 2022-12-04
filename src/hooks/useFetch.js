import { useEffect, useState } from "react";

const useFetch = ({ query, body }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    query(body).then(setData).catch(setError).finally(setIsLoading);
  }, []);

  return {
    data,
    isLoading,
    error,
  };
};

export default useFetch;
