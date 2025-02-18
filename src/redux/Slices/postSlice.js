import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../apis/postCalls";

const postSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        filteredPosts: [],
        loading: false
    },
    reducers: {
        searchPosts: (state, action) => {
            state.filteredPosts = state.posts.filter(post =>
                post.title.toLowerCase().includes(action.payload.toLowerCase())
            );
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => { state.loading = true; })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.filteredPosts = action.payload;
                state.loading = false;
            })
            .addCase(fetchPosts.rejected, (state) => { state.loading = false; });
    },
});

export const { searchPosts } = postSlice.actions;
export default postSlice.reducer;
