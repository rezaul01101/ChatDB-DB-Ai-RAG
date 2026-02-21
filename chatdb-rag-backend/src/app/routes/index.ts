import express from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { RagRoute } from "../modules/rag/rag.route";

const router = express.Router();
const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/rag",
    route: RagRoute,
  },
  // {
  //   path: "/transaction",
  //   route: TransactionRoute,
  // },
  // {
  //   path: "/account",
  //   route: AccountRoute,
  // },
  // {
  //   path: "/user",
  //   route: UserRoute,
  // },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
