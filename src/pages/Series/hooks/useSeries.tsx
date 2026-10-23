import usePlayersStorage from "@/hooks/usePlayersStorage";
import useRoulette from "@/hooks/useRoulette";
import useSeriesStorage from "@/hooks/useSeriesStorage";
import type { Series } from "@/types/series.types";
import { useEffect, useRef, useState } from "react";

const useSeries = () => {
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

    const [playerOneGoals, setPlayerOneGoals] = useState<number>(0);
    const [playerTwoGoals, setPlayerTwoGoals] = useState<number>(0);
    const [series, setSeries] = useState<Series | null>(getSeries());

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

    const buttonLabel = isStopping
        ? "Останавливаем..."
        : isRolling
          ? "Вращаем..."
          : "Запустить";

    const hasMatches = (series?.matches.length ?? 0) > 0;

    const showNewMatch = !hasMatches || isNewMatch;

    useEffect(() => {
        if (!series) {
            const newSeries = createSeries(getPlayer("1"), getPlayer("2"));
            setSeries(newSeries);
        }
    }, [series]);

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

    return {
        series,
        buttonLabel,
        hasResult,
        phase,
        isRolling,
        showNewMatch,
        teamPair,
        autoSpining,
        playerOneGoals,
        playerTwoGoals,
        setPlayerOneGoals,
        setPlayerTwoGoals,
        saveResult,
        addNewMatch,
        newMatchRef,
        saveResultRef,
    };
};

export default useSeries;
