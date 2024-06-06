import express from "express";
import {
  deleteUser,
  getUsers,
  updateUser,
  savePost,
  profilePosts,
  getNotificationNumber,
} from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/verifiedToken.js";

const router = express.Router();

router.route("/users").get(getUsers);
// router.route("/users/:id").get(verifyToken, getUser);
router.route("/users/:id").put(verifyToken, updateUser);
router.route("/users/:id").delete(verifyToken, deleteUser);
router.route("/users/save").post(verifyToken, savePost);
router.route("/users/profilePosts").get(verifyToken, profilePosts);
router.route("/users/notification").get(verifyToken, getNotificationNumber);

export default router;
