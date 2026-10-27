import useSeriesStorage from "@/hooks/useSeriesStorage";
import { calculateWinPercentages } from "@/utils/calculate-win-percentages.util";
import type { PlayerNames } from "@/types/game.types";
import type {
    SeriesWinStatistics,
    Series,
    SeriesStatisticMatch,
    SeriesWinPercentages,
} from "@/types/series.types";
import { getTeamById } from "@/utils/get-team-by-id.util";
import { useEffect, useState } from "react";

const useSeriesResults = () => {
    const { getSeries } = useSeriesStorage();

    const series: Series | null = getSeries();

    const [playerOneGoals, setPlayerOneGoals] = useState<number>(0);
    const [playerTwoGoals, setPlayerTwoGoals] = useState<number>(0);

    const [winPercentages, setWinPercentages] = useState<SeriesWinPercentages>({
        drawPercentage: 0,
        playerOneWinPercentage: 0,
        playerTwoWinPercentage: 0,
    });

    const [winStatistics, setWinStatistics] = useState<SeriesWinStatistics>({
        playerOneWins: 0,
        playerTwoWins: 0,
        draws: 0,
    });

    const [mostScoringMatch, setMostScoringMatch] =
        useState<SeriesStatisticMatch | null>(null);

    const [biggestWinMatch, setBiggestWinMatch] =
        useState<SeriesStatisticMatch | null>(null);

    const calculateStatistics = () => {
        if (series) {
            let playerOneGoalsTotal = 0;
            let playerTwoGoalsTotal = 0;

            let calculatedMostScoringMatch: SeriesStatisticMatch | null = null;
            let calculatedBiggestWinMatch: SeriesStatisticMatch | null = null;
            let calculatedWinStatistics: SeriesWinStatistics = {
                playerOneWins: 0,
                playerTwoWins: 0,
                draws: 0,
            };

            series.matches.forEach((match) => {
                const { playerOne, playerTwo } = match;

                playerOneGoalsTotal += playerOne.score;
                playerTwoGoalsTotal += playerTwo.score;

                const statisticMatch: SeriesStatisticMatch = {
                    playerOne: {
                        name: series.playerOne,
                        score: playerOne.score,
                        team: getTeamById(playerOne.teamId),
                    },
                    playerTwo: {
                        name: series.playerTwo,
                        score: playerTwo.score,
                        team: getTeamById(playerTwo.teamId),
                    },
                };

                const bothScore = playerOne.score + playerTwo.score;

                const mostScoringMatchScore =
                    (calculatedMostScoringMatch?.playerOne.score ?? 0) +
                    (calculatedMostScoringMatch?.playerTwo.score ?? 0);

                if (bothScore > mostScoringMatchScore) {
                    calculatedMostScoringMatch = statisticMatch;
                }

                const goalDifference = Math.abs(
                    playerOne.score - playerTwo.score,
                );

                const biggestWinDifference = calculatedBiggestWinMatch
                    ? Math.abs(
                          calculatedBiggestWinMatch.playerOne.score -
                              calculatedBiggestWinMatch.playerTwo.score,
                      )
                    : 0;

                if (
                    goalDifference > 0 &&
                    goalDifference > biggestWinDifference
                ) {
                    calculatedBiggestWinMatch = statisticMatch;
                }

                if (playerOne.score === playerTwo.score) {
                    calculatedWinStatistics.draws++;
                } else if (playerOne.score > playerTwo.score) {
                    calculatedWinStatistics.playerOneWins++;
                } else {
                    calculatedWinStatistics.playerTwoWins++;
                }
            });

            setMostScoringMatch(calculatedMostScoringMatch);
            setBiggestWinMatch(calculatedBiggestWinMatch);
            setPlayerOneGoals(playerOneGoalsTotal);
            setPlayerTwoGoals(playerTwoGoalsTotal);
            setWinStatistics(calculatedWinStatistics);

            setWinPercentages(calculateWinPercentages(calculatedWinStatistics));
        }
    };

    useEffect(() => {
        calculateStatistics();
    }, []);

    const hasCompletedSeries = series && series.status === "ended";

    const players: PlayerNames = {
        playerOne: series?.playerOne,
        playerTwo: series?.playerTwo,
    };

    return {
        series,
        players,
        playerOneGoals,
        playerTwoGoals,
        winPercentages,
        winStatistics,
        mostScoringMatch,
        biggestWinMatch,
        hasCompletedSeries,
    };
};

export default useSeriesResults;
