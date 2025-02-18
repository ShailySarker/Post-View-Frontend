import { Route, Routes } from 'react-router';
import MainLayouts from '../layouts/MainLayouts';
import LandingPage from '../pages/LandingPage/LandingPage';
import Posts from '../pages/Posts/Posts';
import PostDetails from '../pages/PostDetails/PostDetails';

const Routers = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<MainLayouts />}
            >
                <Route
                    index
                    element={<LandingPage />}
                />
                <Route
                    path="/posts"
                    element={<Posts />}
                />
                <Route path="/post/:id" element={<PostDetails />} />
            </Route>
        </Routes>
    );
};

export default Routers;