import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/apis/postCalls";
import { searchPosts } from "../../redux/Slices/postSlice";
import { Link } from "react-router";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Posts = () => {
    const dispatch = useDispatch();
    const { filteredPosts, loading } = useSelector((state) => state?.posts);
    console.log(filteredPosts)
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 12;

    const totalPages = Math.ceil(filteredPosts?.length / postsPerPage);

    const startIndex = (currentPage - 1) * postsPerPage;
    const paginatedPosts = filteredPosts?.slice(startIndex, startIndex + postsPerPage);

    return (
        <div className="xl:px-24 lg:px-16 md:px-10 px-5 xl:py-7 lg:py-[18px] md:py-4 py-[10px]">
            <h1 className="xl:text-3xl lg:text-2xl md:text-xl text-lg font-bold text-center xl:mb-6 lg:mb-5 mb-4">View All Posts</h1>
            <input
                type="text"
                placeholder="Search post by title..."
                className="w-full py-2 lg:px-5 md:px-4 px-[13px] border-2 border-[#A21D3C] rounded-2xl shadow-md placeholder:font-medium"
                onChange={(e) => dispatch(searchPosts(e?.target?.value))}
            />

            {loading ? (
                <p className="text-center xl:my-[200px] lg:my-[150px] md:my-[170px] my-[120px] font-semibold xl:text-3xl lg:text-2xl md:text-xl text-lg">Loading...</p>
            ) : (
                <div className="xl:mt-7 lg:mt-5 md:mt-4 mt-3">
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4">
                        {paginatedPosts?.map((post) => (
                            <div
                                key={post?.id}
                                className="w-full flex flex-col relative xl:p-4 lg:p-[10px] p-3 border-2 border-[#A21D3C] hover:bg-[#A21D3C] text-black hover:text-white rounded-2xl shadow-md"
                            >
                                <h2 className="font-semibold xl:text-xl/normal md:text-lg/normal text-base">{post?.title}</h2>
                                <p className="mt-3 xl:text-base text-sm xl:mb-20 lg:mb-16 md:mb-14 mb-[54px]">{post?.body.substring(0, 100)}...</p>
                                <Link
                                    to={`/post/${post?.id}`}>
                                    <button className="flex justify-center mx-auto absolute xl:bottom-4 lg:bottom-3 md:bottom-[11px] bottom-[10px] border-2 border-[#A21D3C] xl:py-2 md:py-[6px] py-1 text-[#A21D3C] bg-white rounded-3xl shadow-md px-4 font-medium lg:text-base md:text-sm text-[13.8px] xl:w-[82%] lg:w-[75%] w-[80%] left-1/2 transform -translate-x-1/2">
                                        Show Details
                                    </button>

                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center items-center gap-4 xl:my-10 lg:my-8 md:my-7 my-6" >
                        <button
                            className="xl:w-10 xl:h-10 md:w-9 md:h-9 w-8 h-8 flex justify-center items-center rounded-full bg-[#A21D3C] text-white disabled:opacity-50"
                            onClick={() => setCurrentPage(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            <FaAngleLeft />
                        </button>
                        <span className="font-semibold">
                            Page {currentPage} of {totalPages}
                        </span>
                        <button
                            className="xl:w-10 xl:h-10 md:w-9 md:h-9 w-8 h-8 flex justify-center items-center rounded-full bg-[#A21D3C] text-white disabled:opacity-50"
                            onClick={() => setCurrentPage(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            <FaAngleRight />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Posts;