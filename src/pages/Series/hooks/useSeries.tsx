import usePlayersStorage from "@/hooks/usePlayersStorage";
import useRoulette from "@/hooks/useRoulette";
import useSeriesStorage from "@/hooks/useSeriesStorage";
import type { RoulleteSlot } from "@/types/roulette.types";
import type { Series } from "@/types/series.types";
import { useState } from "react";

const useSeries = () => {
    const { getSeries, createSeries, addMatchToSeries, updateSeriesStatus } =
        useSeriesStorage();

    const { autoSpining, phase, teamPair, isRolling, isStopping, hasResult } =
        useRoulette();

    const { setPlayer } = usePlayersStorage();

    const [isNewMatch, setIsNewMatch] = useState<boolean>(false);

    const [series, setSeries] = useState<Series | null>(getSeries());

    const buttonLabel = isStopping
        ? "Останавливаем..."
        : isRolling
          ? "Вращаем..."
          : "Запустить";

    const hasMatches = (series?.matches.length ?? 0) > 0;

    const showNewMatch = !hasMatches || isNewMatch;

    return {
        series,
        buttonLabel,
        hasResult,
        phase,
        isRolling,
        showNewMatch,
        teamPair,
        autoSpining,
    };
};

export default useSeries;
