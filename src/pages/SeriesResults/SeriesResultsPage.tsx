import { Header } from "@/components/Header";
import { PageWrapper } from "@/components/PageWrapper";
import { Container } from "@mui/material";
import { SeriesResultsBar } from "./components";
import useSeriesResults from "./hooks/useSeriesResults";

const SeriesResultsPage = () => {
    const { players, winPercentages, winStatistics } = useSeriesResults();

    return (
        <PageWrapper>
            <Header showBackButton />
            <Container
                maxWidth="md"
                sx={{
                    p: { xs: 2, sm: 3, md: 4 },
                }}
            >
                <SeriesResultsBar
                    players={players}
                    winPercentages={winPercentages}
                    winStatistics={winStatistics}
                />
            </Container>
        </PageWrapper>
    );
};

export default SeriesResultsPage;
