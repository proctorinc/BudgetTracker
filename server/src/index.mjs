import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT | 3000;

dotenv.config();
app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use(express.json());

app.use("/", routes.plaid);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
