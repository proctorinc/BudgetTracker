import { Router } from "express";
import { Configuration, PlaidEnvironments, PlaidApi } from "plaid";
import dotenv from "dotenv";

dotenv.config();
const router = Router();

const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      "PLAID-CLIENT-ID": process.env.PLAID_CLIENT_ID,
      "PLAID-SECRET": process.env.PLAID_SECRET,
    },
  },
});

const plaidClient = new PlaidApi(configuration);
let user_data = {};

router.post("/accounts", async (req, res, next) => {
  const user_id = req.body.user_id;
  const access_token = user_data[user_id];

  console.log(`user_id: ${user_id}`);
  console.log(`access_token: ${access_token}`);

  plaidClient
    .accountsGet({ access_token })
    .then((accountsResponse) => accountsResponse.accounts)
    .then((accounts) => res.json({ accounts }))
    .catch((err) => {
      console.log(err.response.data);
    });
});

router.post("/transactions/recent", async (req, res, next) => {
  const user_id = req.body.user_id;
  const access_token = user_data[user_id];

  plaidClient
    .transactionsSync({ access_token })
    .then((response) => response.transactions)
    .then((transactions) => res.json({ transactions }))
    .catch((err) => {
      console.log(err.response.data);
    });
});

router.post("/set_access_token", async (req, res, next) => {
  const user_id = req.body.user_id;
  const public_token = req.body.public_token;

  console.log(`public_token: ${public_token}`);
  console.log(`user_id: ${user_id}`);

  plaidClient
    .itemPublicTokenExchange({ public_token })
    .then((tokenResponse) => tokenResponse.access_token)
    .then((access_token) => {
      console.log(`access_token: ${access_token}`);
      console.log(`User data: ${JSON.stringify(user_data)}`);
      user_data[user_id] = access_token;

      console.log(`User data: ${JSON.stringify(user_data)}`);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
});

router.post("/create_link_token", async (req, res, next) => {
  const user_id = req.body.user_id;

  plaidClient
    .linkTokenCreate({
      user: {
        client_user_id: user_id,
      },
      client_name: "Plaid API App",
      products: ["transactions"],
      country_codes: ["US"],
      language: "en",
    })
    .then((tokenResponse) => tokenResponse.data.link_token)
    .then((link_token) => res.json({ link_token }))
    .catch((err) => {
      console.log(err.response.data);
    });
});

const getAccessToken = (publicToken) => {
  return plaidClient
    .itemPublicTokenExchange({ public_token })
    .then((tokenResponse) => tokenResponse.access_token)
    .catch((err) => {
      console.log(err.response.data);
    });
};

export default router;
