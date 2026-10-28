import { Header } from "@/components/Header";
import { PageWrapper } from "@/components/PageWrapper";
import { Container, Stack, Typography } from "@mui/material";
import {
    SeriesResultsActions,
    SeriesResultsBar,
    SeriesScoreCard,
} from "./components";
import useSeriesResults from "./hooks/useSeriesResults";

const SeriesResultsPage = () => {
    const {
        players,
        playerGoals,
        winPercentages,
        winStatistics,
        hasCompletedSeries,
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
                    <Stack spacing={1}>
                        <SeriesScoreCard
                            players={players}
                            goals={playerGoals}
                        />
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
