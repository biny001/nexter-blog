import mongoose, { Schema, Document, model, models } from "mongoose";

// Define interface representing a blog post
interface IBlogPost extends Document {
  title: string;
  content: string;
  author: string;
  blogImage: string;
  additionalImages?: string[]; // Optional array of strings for images
  createdAt: Date;
  updatedAt: Date;
}

// Define schema for blog post
const BlogPostSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  blogImage: {
    type: String,
    required: false,
  },
  additionalImages: {
    type: [String], // Define as array of strings
    required: false, // Optional images property
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Create and export the BlogPost model based on the schema
const Blog = models.Blog || model<IBlogPost>("Blog", BlogPostSchema);
export default Blog;
