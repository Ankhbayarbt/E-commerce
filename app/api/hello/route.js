import dbConnect from "@/backend/config/dbConnect";
import { getProducts } from "@/backend/controller/productControllers";
import { createEdgeRouter } from "next-connect";

const router = createEdgeRouter();

dbConnect();

router.get(getProducts);

export async function GET(request, ctx) {
  return router.run(request, ctx);
}
