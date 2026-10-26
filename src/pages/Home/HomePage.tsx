import CasinoRoundedIcon from "@mui/icons-material/CasinoRounded";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import { Box, Button, Container, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { PageWrapper } from "@/components/PageWrapper";
import { appRoutes } from "@/routes/app-routes";
import { Header } from "@/components/Header";
import { GameCard, PlayersForm } from "./components";
import useHomePage from "./hooks/useHomePage";

const HomePage = () => {
    const {
        playerOne,
        setPlayerOne,
        playerTwo,
        setPlayerTwo,
        playerOneMissing,
        playerTwoMissing,
        startMode,
    } = useHomePage();

    return (
        <PageWrapper>
            <Header
                tagline="YOUR NEXT MATCH STARTS HERE"
                action={
                    <Button
                        component={RouterLink}
                        to={appRoutes.TEAMS_PAGE}
                        variant="outlined"
                        size="small"
                        sx={{
                            minHeight: 40,
                            px: { xs: 1.25, sm: 2 },
                            fontSize: { xs: 13, sm: 14 },
                            whiteSpace: "nowrap",
                        }}
                    >
                        Команды
                    </Button>
                }
            />
            <Box
                component="img"
                src="/images/fc-26-banner.jpg"
                alt="Баннер"
                sx={{
                    display: { xs: "block", md: "none" },
                    width: "100%",
                    maxWidth: 900,
                    height: "auto",
                    mx: "auto",
                }}
            />
            <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
                <Box
                    component="main"
                    sx={{ pt: { xs: 4, sm: 6, md: 8 }, pb: { xs: 5, md: 8 } }}
                >
                    <Box className="slide-down" sx={{ mb: 2.5 }}>
                        <Typography
                            component="h2"
                            sx={{
                                fontSize: 22,
                                fontWeight: 800,
                                color: "#203b2e",
                                mb: 0.5,
                                letterSpacing: 0,
                            }}
                        >
                            Кто выходит на поле?
                        </Typography>
                        <Typography sx={{ color: "#718077", fontSize: 14 }}>
                            Имена сохранятся для следующего шага
                        </Typography>
                    </Box>

                    <PlayersForm
                        playerOne={{
                            name: playerOne,
                            setName: setPlayerOne,
                            isMissing: playerOneMissing,
                        }}
                        playerTwo={{
                            name: playerTwo,
                            setName: setPlayerTwo,
                            isMissing: playerTwoMissing,
                        }}
                    />

                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                            gap: 2,
                        }}
                    >
                        <GameCard
                            direction="right"
                            gameIcon={
                                <CasinoRoundedIcon sx={{ color: "#286344" }} />
                            }
                            gameTitle="Random Match"
                            gameDescription="Матч со случайными командами"
                            buttonText="Создать случайный матч"
                            onStart={() => startMode("random-match")}
                        />

                        <GameCard
                            direction="left"
                            gameIcon={
                                <EmojiEventsRoundedIcon
                                    sx={{ color: "#68731f" }}
                                />
                            }
                            gameTitle="Series"
                            gameDescription="Создать серию встреч"
                            buttonText="Создать серию"
                            iconBgColor="#f2f3df"
                            buttonVariant="outlined"
                            onStart={() => startMode("series")}
                        />
                    </Box>
                </Box>
            </Container>
        </PageWrapper>
    );
};

export default HomePage;
