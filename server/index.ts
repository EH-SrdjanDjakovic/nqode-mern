import express, { Express } from "express";
import dotenv from "dotenv";
import configureDatabase from "./databaseConfig";
import productApi from "./products/api";
import cartsApi from "./carts/api";
const cors = require("cors");

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;
const db = configureDatabase();

app.use(cors());
app.use(express.json());

productApi(app, db);
cartsApi(app, db);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
