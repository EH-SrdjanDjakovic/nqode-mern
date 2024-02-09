import { getCarts } from "./databaseHelpers";
import { Request, Response, Express } from "express";
import { Firestore } from "firebase/firestore/lite";

function cartsApi(app: Express, db: Firestore) {
  app.get("/carts", (_req: Request, res: Response) => {
    getCarts(db)
      .then((carts) => {
        res.json({ carts });
      })
      .catch((e) => {
        res.send(`Error occured: ${e}`);
      });
  });
}

export default cartsApi;
