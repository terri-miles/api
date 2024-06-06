import express from "express";
import { verifyToken } from "../middleware/verifiedToken.js";
import {
  getPosts,
  getPost,
  addPost,
  updatePost,
  deletePost,
} from "../controllers/post.controller.js";

const router = express.Router();

router.route("/posts").get(getPosts);
router.route("/posts/:id").get(getPost);
router.route("/posts").post(verifyToken, addPost);
router.route("/posts/:id").put(verifyToken, updatePost);
router.route("/posts/:id").delete(verifyToken, deletePost);

export default router;
