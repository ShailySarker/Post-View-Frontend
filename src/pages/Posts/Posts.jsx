import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/apis/postCalls";
import { searchPosts } from "../../redux/Slices/postSlice";
import { Link } from "react-router";

const Posts = () => {
    const dispatch = useDispatch();
    const { filteredPosts, loading } = useSelector((state) => state?.posts);
    console.log(filteredPosts)
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    return (
        <div className="max-w-3xl mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-4">Posts</h1>
            <input
                type="text"
                placeholder="Search by title..."
                className="w-full p-2 mb-4 border rounded"
                onChange={(e) => dispatch(searchPosts(e?.target?.value))}
            />

            {loading ? (
                <p className="text-center">Loading...</p>
            ) : (
                <div className="grid gap-4">
                    {filteredPosts?.map((post) => (
                        <Link
                            key={post?.id}
                            to={`/post/${post?.id}`}
                            className="block p-4 border rounded hover:bg-gray-100"
                        >
                            <h2 className="font-semibold">{post?.title}</h2>
                            <p className="text-sm text-gray-600">{post?.body.substring(0, 50)}...</p>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Posts;