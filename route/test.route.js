import express from "express";
import {
  shouldBeAdmin,
  shouldBeLoggedIn,
} from "../controllers/test.controller.js";
import { verifyToken } from "../middleware/verifiedToken.js";

const router = express.Router();

router.route("/should-be-logged-in").get(verifyToken, shouldBeLoggedIn);
router.route("/should-be-admin").get(shouldBeAdmin);

export default router;
