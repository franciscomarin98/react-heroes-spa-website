import {Route, Routes} from "react-router-dom";

import {HeroPage, MarvelPage, SearchPage, WarnerPage} from "../pages";
import {Navbar} from "../components";

const DashboardRouter = () => {
    return (
        <div>
            <Navbar/>
            <div className="container-fluid mt-2">
                <Routes>
                    <Route path="/heroe/:id" element={<HeroPage/>}/>
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
