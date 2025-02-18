import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch posts from API
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return response.data;
});
