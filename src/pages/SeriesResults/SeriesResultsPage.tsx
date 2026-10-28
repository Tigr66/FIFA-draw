import { Header } from "@/components/Header";
import { PageWrapper } from "@/components/PageWrapper";
import { Container, Stack, Typography } from "@mui/material";
import {
    SeriesResultsActions,
    SeriesResultsBar,
    SeriesScoreCard,
    StatisticMatchCard,
} from "./components";
import useSeriesResults from "./hooks/useSeriesResults";

const SeriesResultsPage = () => {
    const {
        players,
        playerGoals,
        winPercentages,
        winStatistics,
        hasCompletedSeries,
        biggestWinMatch,
        mostScoringMatch,
        createNewSeries,
        resumeSeries,
    } = useSeriesResults();

    return (
        <PageWrapper>
            <Header showBackButton />
            <Container
                maxWidth="md"
                sx={{
                    p: { xs: 2, sm: 3, md: 4 },
                }}
            >
                {!hasCompletedSeries && (
                    <Typography
                        className="slide-down"
                        variant="h4"
                        color="text.secondary"
                        sx={{ textAlign: "center" }}
                    >
                        Чтобы посмотреть статистику, сначала завершите серию.
                    </Typography>
                )}

                {hasCompletedSeries && (
                    <Stack spacing={2}>
                        <SeriesScoreCard
                            players={players}
                            goals={playerGoals}
                        />
                        <Stack
                            spacing={2}
                            direction={{
                                xs: "column",
                                md: "row",
                            }}
                            sx={{
                                "& > *": {
                                    flex: 1,
                                },
                            }}
                        >
                            <StatisticMatchCard
                                title="Самый результативный матч"
                                match={mostScoringMatch}
                            />
                            <StatisticMatchCard
                                title="Самый крупный разгром"
                                match={biggestWinMatch}
                            />
                        </Stack>
                        <SeriesResultsBar
                            players={players}
                            winPercentages={winPercentages}
                            winStatistics={winStatistics}
                        />
                        <SeriesResultsActions
                            onNewSeries={createNewSeries}
                            onResumeSeries={resumeSeries}
                        />
                    </Stack>
                )}
            </Container>
        </PageWrapper>
    );
};

export default SeriesResultsPage;
