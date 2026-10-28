import type {
    SeriesWinPercentages,
    SeriesWinStatistics,
} from "@/types/series.types";

export const calculateWinPercentages = (
    statistics: SeriesWinStatistics,
): SeriesWinPercentages => {
    const totalMatches =
        statistics.playerOneWins + statistics.playerTwoWins + statistics.draws;

    if (totalMatches === 0) {
        return {
            playerOneWinPercentage: 0,
            playerTwoWinPercentage: 0,
            drawPercentage: 0,
        };
    }

    return {
        playerOneWinPercentage:
            Math.round((statistics.playerOneWins / totalMatches) * 1000) / 10,

        playerTwoWinPercentage:
            Math.round((statistics.playerTwoWins / totalMatches) * 1000) / 10,

        drawPercentage:
            Math.round((statistics.draws / totalMatches) * 1000) / 10,
    };
};
