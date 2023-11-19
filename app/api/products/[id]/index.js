import { createRouter } from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import { getProduct } from "@/backend/controller/productControllers";

const router = createRouter();

dbConnect();

router.get(getProduct);

export default router.handler();
