export const getLinkTokenForUser = async (user) => {
  return fetch("http://localhost:4090/bank/token/create/link_token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.jwtToken}`,
    },
  })
    .then((response) => response.json())
    .then(({ link_token }) => link_token);
};
