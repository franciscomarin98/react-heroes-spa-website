import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LoginPage} from "../pages";

import DashboardRouter from "./DashboardRouter";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={
                    <PublicRouter>
                        <LoginPage/>
                    </PublicRouter>
                }/>
                <Route path="/*" element={
                    <PrivateRouter>
                        <DashboardRouter/>
                    </PrivateRouter>
                }/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
