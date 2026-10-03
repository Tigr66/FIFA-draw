import { CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { appRoutes } from "@/routes/app-routes";
import HomePage from "@/pages/Home/HomePage";

const App = () => {
    return (
        <>
            <CssBaseline />
            <BrowserRouter>
                <Routes>
                    <Route path={appRoutes.HOME_PAGE} element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
