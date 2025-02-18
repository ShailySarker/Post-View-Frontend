import axios from "axios";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useParams } from "react-router";

const PostDetails = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => setPost(response?.data))
            .catch((error) => console.error(error));
    }, [id]);

    return (
        <div className="xl:px-24 lg:px-16 md:px-10 px-5 xl:py-7 lg:py-[18px] md:py-4 py-[10px] xl:mb-20 lg:mb-14 md:mb-12 mb-10">
            <h1 className="xl:text-3xl lg:text-2xl md:text-xl text-lg font-bold text-center xl:mb-6 lg:mb-5 mb-4">Post Details for Post_ID: {id}</h1>
            {post ? (
                <div className="border-2 border-[#A21D3C] rounded-2xl shadow-md xl:p-16 lg:p-12 md:p-10 p-5 flex flex-col lg:gap-4 md:gap-[14px] gap-3">
                    <h1 className="font-semibold xl:text-lg md:text-[17px] text-base text-[#A21D3C]"><span className="border-b-2">User ID:</span> {post?.userId}</h1>
                    <h1 className="font-bold xl:text-xl/normal md:text-lg/normal text-base"><span className="border-b-2">Title:</span> {post?.title}</h1>
                    <p className="text-black font-medium xl:text-lg/loose md:text-[17px]/loose text-base/loose"><span className="border-b-2">Description:</span> {post?.body}</p>
                    <Link to="/posts">
                        <button className='xl:mt-12 lg:mt-10 md:mt-8 mt-5 bg-[#A21D3C] xl:py-[10px] lg:py-2 md:py-[6px] py-1 text-white rounded-3xl shadow-md px-4 font-semibold lg:text-base md:text-sm text-[13.8px] lg:w-40 md:w-36 w-32 flex items-center gap-3'><FaArrowLeft /> Go to Back</button>
                    </Link>

                </div>
            ) : (
                <p className="text-center xl:my-[200px] lg:my-[150px] md:my-[170px] my-[120px] font-semibold xl:text-3xl lg:text-2xl md:text-xl text-lg">Loading...</p>
            )}
        </div>
    );
};

export default PostDetails;