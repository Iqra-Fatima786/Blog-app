// A Model defines the structure of your blog posts in MongoDB.
import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["Motivation", "Tech", "Studies", "Other"],
    default: "Other",
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    default: "Anonymous",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
},
{ timestamps: true } // 👈 This adds createdAt and updatedAt automatically

);

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
