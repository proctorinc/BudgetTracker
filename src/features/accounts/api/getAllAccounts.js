export const getAllAccounts = async (user) => {
  return fetch("http://localhost:4090/bank/accounts/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.jwtToken}`,
    },
  })
    .then((response) => response.json())
    .then(({ accounts }) => accounts);
};
