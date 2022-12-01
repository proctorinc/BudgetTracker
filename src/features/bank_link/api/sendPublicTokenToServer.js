export const sendPublicTokenToServer = async (public_token, user) => {
  return await fetch("http://localhost:4090/bank/token/create/access_token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.jwtToken}`,
    },
    body: JSON.stringify({
      public_token: public_token,
    }),
  });
};
