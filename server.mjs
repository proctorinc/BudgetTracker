import dotenv from "dotenv";
import express, { response } from "express";
import cors from "cors";
import { Configuration, PlaidApi, PlaidEnvironments } from "plaid";

const app = express();
const PORT = 4090;
dotenv.config();
app.use(cors());

const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      "PLAID-CLIENT-ID": process.env.PLAID_CLIENT_ID,
      "PLAID-SECRET": process.env.PLAID_SECRET,
    },
  },
});

const client = new PlaidApi(configuration);
let user_data = {};

app.use(express.json());

app.post("/accounts", async (req, res, next) => {
  try {
    const user_id = req.body.user_id;
    const access_token = user_data[user_id];
    const accounts_response = await client.accountsGet({ access_token });
    const accounts = accounts_response.data.accounts;
    res.json({ accounts });
  } catch (e) {
    console.log(e);
  }
});

app.post("/transactions/recent", async (req, res, next) => {
  try {
    const user_id = req.body.user_id;
    const access_token = user_data[user_id];
    const response = await client.transactionsSync({ access_token });
    const transactions = response.data.transactions;
    res.json({ transactions });
  } catch (e) {
    console.log(e);
  }
});

app.post("/set_access_token", async (req, res, next) => {
  try {
    const user_id = req.body.user_id;
    const public_token = req.body.public_token;
    const response = await client
      .itemPublicTokenExchange({ public_token })
      .catch((err) => {
        console.log(err);
      });
    const access_token = response.data.access_token;
    user_data[user_id] = access_token;
    res.status(200).json({ message: "success" });
  } catch (e) {
    console.log(e);
    res.status(400);
  }
});

// app.post("/exchange_public_token", async (req, res, next) => {
//   console.log("Querying exchange public token");
//   try {
//     const response = await client
//       .itemPublicTokenExchange({ public_token: req.body.public_token })
//       .catch((err) => {
//         console.log(err);
//       });
//     const access_token = response.data.access_token;
//     res.json({ access_token });
//   } catch (e) {
//     console.log(e);
//   }
// });

app.post("/create_link_token", async (req, res, next) => {
  console.log("Querying create link token");
  const user_id = req.body.user_id;
  try {
    const token_res = await client.linkTokenCreate({
      user: {
        client_user_id: user_id,
      },
      client_name: "Plaid API App",
      products: ["transactions"],
      country_codes: ["US"],
      language: "en",
    });
    res.json({ link_token: token_res.data.link_token });
  } catch (e) {
    console.log(e);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
