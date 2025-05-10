
import express from "express";
// import { getAllBlogs, createBlog } from "../controllers/BlogController.js";
import { getAllBlogs, createBlog, updateBlog, deleteBlog } from "../controllers/BlogController.js";


const router = express.Router();


router.get("/", getAllBlogs);  // Get all blogs

router.post("/", createBlog);   // Create a new blog

router.put("/:id", updateBlog);    // update blog 

router.delete("/:id", deleteBlog);    //deleteBlog


export default router;

