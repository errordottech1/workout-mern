import express from "express";
import dotenv from "dotenv";

import exerciseRoutes from "./routes/exerciseRoutes.js";
import { connect } from "./config/db.js";
dotenv.config();

connect();

const port = process.env.PORT || 8000;
const server = express();

server.use(express.urlencoded({ extended: false }));
server.use(express.json());

server.use("/api/exercise", exerciseRoutes);

server.listen(port, () => {
  console.log(`server running on port ${port}`);
});
