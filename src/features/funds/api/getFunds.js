export const getFunds = async (user) => {
  return fetch("http://localhost:4090/bank/funds", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.jwtToken}`,
    },
  })
    .then((response) => response.json())
    .then(({ funds }) => funds);
};
