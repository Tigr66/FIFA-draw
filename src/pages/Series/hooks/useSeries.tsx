import usePlayersStorage from "@/hooks/usePlayersStorage";
import useRoulette from "@/hooks/useRoulette";
import useSeriesStorage from "@/hooks/useSeriesStorage";
import type { Series } from "@/types/series.types";
import { useEffect, useState } from "react";

const useSeries = () => {
    const { getSeries, createSeries, addMatchToSeries, updateSeriesStatus } =
        useSeriesStorage();

    const { autoSpining, phase, teamPair, isRolling, isStopping, hasResult } =
        useRoulette();

    const { getPlayer, setPlayer } = usePlayersStorage();

    const [isNewMatch, setIsNewMatch] = useState<boolean>(false);

    const [playerOneGoals, setPlayerOneGoals] = useState<number>(0);
    const [playerTwoGoals, setPlayerTwoGoals] = useState<number>(0);
    const [series, setSeries] = useState<Series | null>(getSeries());

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
        }
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
    };
};

export default useSeries;
