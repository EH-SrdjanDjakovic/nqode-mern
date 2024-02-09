import { getProducts, getSingleProduct } from "./databaseHelpers"
import { Request, Response, Express } from "express"
import { Firestore } from "firebase/firestore/lite"

function productApi(app: Express, db: Firestore) {
  app.get("/products", (_req: Request, res: Response) => {
    getProducts(db)
      .then(products => {
        res.json({ products })
      })
      .catch(e => {
        res.send(`Error occured: ${e}`)
      })
  })

  app.get("/products/:productId", (req: Request, res: Response) => {
    getSingleProduct(db, req.params.productId)
      .then(product => {
        res.send({ product })
      })
      .catch(e => {
        res.send(`Error occured: ${e}`)
      })
  })
}

export default productApi
