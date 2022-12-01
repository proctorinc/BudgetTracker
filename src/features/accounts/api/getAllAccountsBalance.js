export const getAllAccountsBalance = (user) => {
  return fetch("http://localhost:4090/bank/accounts/balance/current", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.jwtToken}`,
    },
  })
    .then((response) => response.json())
    .then(({ balance }) => balance);
};
