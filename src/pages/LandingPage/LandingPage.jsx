import { useEffect } from "react";
import { IoFlash } from "react-icons/io5";
import { useNavigate } from "react-router";

const LandingPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/posts");
        }, 3000);
        return () => clearTimeout(timer);
    }, [navigate]);


    return (
        <div className='h-screen flex justify-center items-center'>
            <div className="flex items-center justify-center gap-3 text-[#A21D3C]">
                <IoFlash className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl" />
                <h1 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold">Post Pro</h1>
            </div>
        </div>
    );
};

export default LandingPage;