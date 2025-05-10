
import express from "express";
import dotenv from "dotenv";
import blogRoutes from "./Server/routes/BlogRoutes.js"; 
import Connection from "./Server/database/db.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use("/api/blogs", blogRoutes); // ✅ Use after app is defined

Connection(); // MongoDB

app.get("/", (req, res) => {
  res.send("🚀 Backend is running");
});

app.listen(PORT, () => {
  console.log(`✅ Server started on port ${PORT}`);
});
