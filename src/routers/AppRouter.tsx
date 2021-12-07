import {BrowserRouter, Route, Routes} from "react-router-dom";

import DashboardRouter from "./DashboardRouter";
import {LoginPage} from "../pages";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/*" element={<DashboardRouter/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
