import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRouth from "./route/auth.route.js";
import testRoute from "./route/test.route.js";
import updateUserRoute from "./route/user.route.js";
import postRoute from "./route/post.route.js";
import chatRoutes from "./route/chat.route.js";
import messageRoutes from "./route/message.route.js";

const app = express();
dotenv.config();

app.get("/hello", (req, res) => {
  res.send("hello there");
});

// middleware
app.use(express.json());
app.use(cors({ origin: 'https://express-realestate.vercel.app', credentials: true }));
app.use(cookieParser());
// app.options('*', cors());


app.use("/api/v1", authRouth);
app.use("/api/v1/test", testRoute);
app.use("/api/v1/", updateUserRoute);
app.use("/api/v1/", postRoute);
app.use("/api/v1/", chatRoutes);
app.use("/api/v1/", messageRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
