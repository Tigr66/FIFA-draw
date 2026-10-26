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
        playerOneWinPercentage: (statistics.playerOneWins / totalMatches) * 100,
        playerTwoWinPercentage: (statistics.playerTwoWins / totalMatches) * 100,
        drawPercentage: (statistics.draws / totalMatches) * 100,
    };
};
