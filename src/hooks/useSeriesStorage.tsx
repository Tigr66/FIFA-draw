import type { Series, SeriesMatch } from "@/types/series.types";

const SERIES_STORAGE_KEY = "fifa-draw:series";

const useSeriesStorage = () => {
    const getSeries = (): Series | null => {
        const series = localStorage.getItem(SERIES_STORAGE_KEY);
        return series ? JSON.parse(series) : null;
    };

    const createSeries = (playerOne: string, playerTwo: string): Series => {
        const newSeries: Series = {
            playerOne,
            playerTwo,
            matches: [],
            status: "in-progress",
        };

        localStorage.setItem(SERIES_STORAGE_KEY, JSON.stringify(newSeries));

        return newSeries;
    };

    const addMatchToSeries = (match: SeriesMatch): void => {
        const series = getSeries();

        if (!series) return;

        series.matches.push(match);

        localStorage.setItem(SERIES_STORAGE_KEY, JSON.stringify(series));
    };

    const updateSeriesStatus = (status: "in-progress" | "ended"): void => {
        const series = getSeries();

        if (!series) return;

        series.status = status;

        localStorage.setItem(SERIES_STORAGE_KEY, JSON.stringify(series));
    };

    return { getSeries, createSeries, addMatchToSeries, updateSeriesStatus };
};

export default useSeriesStorage;
