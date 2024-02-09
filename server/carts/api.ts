import { getCarts, updateCart } from "./databaseHelpers";
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

  app.put("/carts", (req, res) => {
    console.log("request", req.body);
    updateCart(db, req.body);
    res.send("Got a POST request");
  });
}

export default cartsApi;
