import { CardWrapper } from "@/components/CardWrapper";
import type { PlayerNames } from "@/types/game.types";
import type {
    SeriesWinPercentages,
    SeriesWinStatistics,
} from "@/types/series.types";
import { Box, Tooltip, Typography } from "@mui/material";

interface SeriesResultsBarProps {
    winStatistics: SeriesWinStatistics;
    winPercentages: SeriesWinPercentages;
    players: PlayerNames;
}

const SeriesResultsBar = ({
    winPercentages,
    winStatistics,
    players,
}: SeriesResultsBarProps) => {
    const { drawPercentage, playerOneWinPercentage, playerTwoWinPercentage } =
        winPercentages;

    const { draws, playerOneWins, playerTwoWins } = winStatistics;

    const results = [
        {
            id: "playerOne",
            label: `Победы: ${playerOneWins}`,
            percentage: playerOneWinPercentage,
            color: "success.main",
        },
        {
            id: "draws",
            label: `Ничьи: ${draws}`,
            percentage: drawPercentage,
            color: "warning.main",
        },
        {
            id: "playerTwo",
            label: `Победы: ${playerTwoWins}`,
            percentage: playerTwoWinPercentage,
            color: "primary.main",
        },
    ];

    return (
        <CardWrapper
            title="Результаты серии"
            sx={{
                p: 2,
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 1,
                    mb: 1,
                }}
            >
                <Typography>
                    {players.playerOne} ({playerOneWinPercentage}%)
                </Typography>

                <Typography>Ничья ({drawPercentage}%)</Typography>

                <Typography>
                    {players.playerTwo} ({playerTwoWinPercentage}%)
                </Typography>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    width: "100%",
                    height: 16,
                    overflow: "hidden",
                    borderRadius: 2,
                }}
            >
                {results.map((result) => (
                    <Tooltip
                        key={result.id}
                        title={result.label}
                        slotProps={{
                            tooltip: {
                                sx: {
                                    bgcolor: result.color,
                                    fontSize: "0.875rem",
                                },
                            },
                            arrow: {
                                sx: {
                                    color: result.color,
                                },
                            },
                        }}
                        arrow
                    >
                        <Box
                            sx={{
                                width: `${result.percentage}%`,
                                bgcolor: result.color,
                                cursor: "pointer",
                            }}
                        />
                    </Tooltip>
                ))}
            </Box>
        </CardWrapper>
    );
};

export default SeriesResultsBar;
