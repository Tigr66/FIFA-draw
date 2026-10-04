import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { Box, Button, Container, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { PageWrapper } from "@/components/PageWrapper";
import { countries } from "@/data/countries";
import { appRoutes } from "@/routes/app-routes";
import { Header } from "@/components/Header";
import { CountryCard } from "./components";

const TeamsPage = () => {
    const teamCount = countries.reduce(
        (total, country) => total + country.teams.length,
        0,
    );

    return (
        <PageWrapper>
            <Header
                action={
                    <Button
                        component={RouterLink}
                        to={appRoutes.HOME_PAGE}
                        variant="outlined"
                        size="small"
                        startIcon={<ArrowBackRoundedIcon />}
                        sx={{
                            minHeight: 40,
                            px: { xs: 1, sm: 1.5 },
                            fontSize: { xs: 12, sm: 14 },
                            whiteSpace: "nowrap",
                        }}
                    >
                        На главную
                    </Button>
                }
            />
            <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
                <Box
                    component="main"
                    sx={{ pt: { xs: 4, sm: 6 }, pb: { xs: 5, md: 8 } }}
                >
                    <Box sx={{ mb: { xs: 3, sm: 4 } }}>
                        <Typography
                            component="h1"
                            sx={{
                                fontSize: { xs: 30, sm: 38, md: 44 },
                                lineHeight: 1.1,
                                fontWeight: 850,
                                letterSpacing: 0,
                                color: "#173629",
                                overflowWrap: "anywhere",
                                mb: 1,
                            }}
                        >
                            Доступные команды
                        </Typography>
                        <Typography
                            sx={{
                                color: "#64766c",
                                fontSize: { xs: 14, sm: 16 },
                            }}
                        >
                            {countries.length} стран · {teamCount} команд
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "minmax(0, 1fr)",
                                md: "repeat(2, minmax(0, 1fr))",
                                xl: "repeat(3, minmax(0, 1fr))",
                            },
                            gap: { xs: 1.5, sm: 2 },
                            alignItems: "start",
                        }}
                    >
                        {countries.map((country) => (
                            <CountryCard key={country.name} country={country} />
                        ))}
                    </Box>
                </Box>
            </Container>
        </PageWrapper>
    );
};

export default TeamsPage;
