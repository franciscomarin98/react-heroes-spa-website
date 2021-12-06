import MarvelPage from "../pages/MarvelPage";
import WarnerPage from "../pages/WarnerPage";
import SearchPage from "../pages/SearchPage";
import LoginPage from "../pages/LoginPage";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "../components/Navbar";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<MarvelPage/>}/>
                <Route path="dc-heroes" element={<WarnerPage/>}/>
                <Route path="marvel-heroes" element={<MarvelPage/>}/>
                <Route path="search-heroe" element={<SearchPage/>}/>
                <Route path="login" element={<LoginPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
