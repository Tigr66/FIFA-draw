import { CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { appRoutes } from "@/routes/app-routes";
import { RandomMatchPage } from "@/pages/RandomMatch";
import { TeamsPage } from "./pages/Teams";
import HomePage from "@/pages/Home/HomePage";

const App = () => {
    return (
        <>
            <CssBaseline />
            <BrowserRouter>
                <Routes>
                    <Route path={appRoutes.HOME_PAGE} element={<HomePage />} />
                    <Route
                        path={appRoutes.RANDOM_MATCH_PAGE}
                        element={<RandomMatchPage />}
                    />
                    <Route
                        path={appRoutes.TEAMS_PAGE}
                        element={<TeamsPage />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
