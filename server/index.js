import express from "express";
import exerciseRoutes from "./routes/exerciseRoutes.js";

const server = express();

server.use("/api/exercise", exerciseRoutes);

server.listen(5000, () => {
  console.log(`server running on port 5000`);
});
