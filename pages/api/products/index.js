import { createRouter } from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import {
  getProducts,
  newProduct,
} from "@/backend/controller/productControllers";

const router = createRouter();
// sadasd
dbConnect();

router.get(getProducts);
router.post(newProduct);

export default router.handler();
