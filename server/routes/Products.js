import express from "express";
import {
  addProducts,
  viewProducts,
  deleteProducts,
  updateProducts,
  viewProductsById,
} from "../controllers/Products.js";
import { Auth } from "../middlewares/Auth.js";

const router = express.Router();

router.post("/addproducts", addProducts);
router.get("/viewproducts", viewProducts);
router.post("/deleteproducts", deleteProducts);
router.patch("/updateproducts", updateProducts);
router.get("/viewProductById/:id", viewProductsById);
// router.get("/searchproducts", searchProducts);

export default router;
