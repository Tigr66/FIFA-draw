import { Header } from "@/components/Header";
import { PageWrapper } from "@/components/PageWrapper";
import { Container } from "@mui/material";

const SeriesResultsPage = () => {
    return (
        <PageWrapper>
            <Header showBackButton />
            <Container
                maxWidth="md"
                sx={{
                    p: { xs: 2, sm: 3, md: 4 },
                }}
            ></Container>
        </PageWrapper>
    );
};

export default SeriesResultsPage;
