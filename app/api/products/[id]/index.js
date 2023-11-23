import { createRouter } from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import {
  getProduct,
  newProduct,
  sell,
} from "@/backend/controller/productControllers";

const router = createRouter();

dbConnect();

router.get(getProduct);
router.post(newProduct);
router.put(sell);

export default router.handler();
