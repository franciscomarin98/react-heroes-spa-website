import MarvelPage from "../pages/MarvelPage";
import WarnerPage from "../pages/WarnerPage";
import SearchPage from "../pages/SearchPage";

import {Route, Routes} from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroPage from "../pages/HeroPage";

const DashboardRouter = () => {
    return (
        <div>
            <Navbar/>
            <div className="container-fluid">
                <Routes>
                    <Route path="/heroe/:id" element={<HeroPage/>} />
                    <Route path="dc-heroes" element={<WarnerPage/>}/>
                    <Route path="marvel-heroes" element={<MarvelPage/>}/>
                    <Route path="search-heroe" element={<SearchPage/>}/>

                    <Route path="/" element={<MarvelPage/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default DashboardRouter;
