import { BrowserRouter, Route, Routes } from "react-router-dom";
import { appRoutes } from "@/routes/app-routes";

import { RandomMatchPage } from "@/pages/RandomMatch";
import { TeamsPage } from "@/pages/Teams";
import { HomePage } from "@/pages/Home";
import { SeriesPage } from "@/pages/Series";
import { SeriesResultsPage } from "@/pages/SeriesResults";

import "./styles/global.css";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={appRoutes.HOME_PAGE} element={<HomePage />} />
                <Route
                    path={appRoutes.RANDOM_MATCH_PAGE}
                    element={<RandomMatchPage />}
                />
                <Route path={appRoutes.TEAMS_PAGE} element={<TeamsPage />} />
                <Route path={appRoutes.SERIES_PAGE} element={<SeriesPage />} />
                <Route
                    path={appRoutes.SERIES_RESULTS_PAGE}
                    element={<SeriesResultsPage />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
