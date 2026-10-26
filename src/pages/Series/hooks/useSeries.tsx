import usePlayersStorage from "@/hooks/usePlayersStorage";
import useRoulette from "@/hooks/useRoulette";
import useSeriesStorage from "@/hooks/useSeriesStorage";
import type { Series } from "@/types/series.types";
import { appRoutes } from "@/routes/app-routes";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const useSeries = () => {
    const navigate = useNavigate();

    const { getSeries, createSeries, addMatchToSeries, updateSeriesStatus } =
        useSeriesStorage();

    const {
        autoSpining,
        resetTeams,
        phase,
        teamPair,
        isRolling,
        isStopping,
        hasResult,
    } = useRoulette();

    const { getPlayer, setPlayer } = usePlayersStorage();

    const [isNewMatch, setIsNewMatch] = useState<boolean>(false);

    const [initialSeries] = useState(() => getSeries());

    const [playerOneGoals, setPlayerOneGoals] = useState<number>(0);
    const [playerTwoGoals, setPlayerTwoGoals] = useState<number>(0);
    const [series, setSeries] = useState<Series | null>(initialSeries);
    const [isExistingSeriesDialogOpen, setIsExistingSeriesDialogOpen] =
        useState<boolean>((initialSeries?.matches.length ?? 0) > 0);

    const newMatchRef = useRef<HTMLDivElement | null>(null);
    const saveResultRef = useRef<HTMLDivElement | null>(null);

    const saveResult = () => {
        if (teamPair && hasResult) {
            addMatchToSeries({
                playerOne: {
                    teamId: teamPair.first.id,
                    score: playerOneGoals,
                },
                playerTwo: {
                    teamId: teamPair.second.id,
                    score: playerTwoGoals,
                },
            });
            setSeries(getSeries());
            setIsNewMatch(false);
            resetTeams();
            setPlayerOneGoals(0);
            setPlayerTwoGoals(0);
        }
    };

    const addNewMatch = () => {
        setIsNewMatch(true);
    };

    const closeNewMatch = () => {
        setIsNewMatch(false);
        resetTeams();
    };

    const finishSeries = () => {
        updateSeriesStatus("ended");
        navigate(appRoutes.SERIES_RESULTS_PAGE);
    };

    const createNewSeries = () => {
        const newSeries = createSeries(getPlayer("1"), getPlayer("2"));
        setSeries(newSeries);
        setIsExistingSeriesDialogOpen(false);
    };

    const continueSeries = () => {
        if (series && series.status === "in-progress") {
            setPlayer("1", series.playerOne);
            setPlayer("2", series.playerTwo);
        }
        if (series && series.status === "ended") {
            navigate(appRoutes.SERIES_RESULTS_PAGE);
        }
        setIsExistingSeriesDialogOpen(false);
    };

    const goToHomePage = () => {
        navigate(appRoutes.HOME_PAGE);
    };

    useEffect(() => {
        if (isNewMatch && newMatchRef.current) {
            newMatchRef.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }
    }, [isNewMatch]);

    useEffect(() => {
        if (hasResult && saveResultRef.current) {
            saveResultRef.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }
    }, [hasResult]);

    useEffect(() => {
        const playerOne = getPlayer("1");
        const playerTwo = getPlayer("2");

        if (
            !initialSeries?.matches.length &&
            (initialSeries?.playerOne !== playerOne ||
                initialSeries?.playerTwo !== playerTwo)
        ) {
            const newSeries = createSeries(getPlayer("1"), getPlayer("2"));
            setSeries(newSeries);
        }
    }, []);

    const buttonLabel = isStopping
        ? "Останавливаем..."
        : isRolling
          ? "Вращаем..."
          : "Запустить";

    const hasMatches = (series?.matches.length ?? 0) > 0;

    const showNewMatch = !hasMatches || isNewMatch;

    const showCloseMatch = !hasResult && hasMatches;

    return {
        series,
        buttonLabel,
        hasResult,
        phase,
        isRolling,
        showNewMatch,
        showCloseMatch,
        isExistingSeriesDialogOpen,
        teamPair,
        playerOneGoals,
        playerTwoGoals,
        autoSpining,
        setPlayerOneGoals,
        setPlayerTwoGoals,
        saveResult,
        addNewMatch,
        finishSeries,
        closeNewMatch,
        createNewSeries,
        continueSeries,
        goToHomePage,
        newMatchRef,
        saveResultRef,
    };
};

export default useSeries;
