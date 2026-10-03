import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CasinoRoundedIcon from "@mui/icons-material/CasinoRounded";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import {
    Box,
    Button,
    Container,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { PageWrapper } from "@/components/PageWrapper";
import { appRoutes } from "@/routes/app-routes";
import { Header } from "@/components/Header";
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
            <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
                <Box
                    component="main"
                    sx={{ pt: { xs: 4, sm: 6, md: 8 }, pb: { xs: 5, md: 8 } }}
                >
                    <Box sx={{ mb: 2.5 }}>
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
                            Имена сохранятся для следующего шага.
                        </Typography>
                    </Box>

                    <Paper
                        component="section"
                        sx={{
                            p: { xs: 2, sm: 3 },
                            mb: 3,
                        }}
                    >
                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: {
                                    xs: "1fr",
                                    sm: "1fr 1fr",
                                },
                                gap: 2,
                            }}
                        >
                            <TextField
                                label="Игрок 1"
                                value={playerOne}
                                onChange={(event) =>
                                    setPlayerOne(event.target.value)
                                }
                                error={playerOneMissing}
                                helperText={
                                    playerOneMissing ? "Введи имя игрока" : " "
                                }
                                fullWidth
                                size="medium"
                                slotProps={{ htmlInput: { maxLength: 30 } }}
                            />
                            <TextField
                                label="Игрок 2"
                                value={playerTwo}
                                onChange={(event) =>
                                    setPlayerTwo(event.target.value)
                                }
                                error={playerTwoMissing}
                                helperText={
                                    playerTwoMissing ? "Введи имя игрока" : " "
                                }
                                fullWidth
                                size="medium"
                                slotProps={{ htmlInput: { maxLength: 30 } }}
                            />
                        </Box>
                    </Paper>

                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                            gap: 2,
                        }}
                    >
                        <Paper
                            sx={{
                                p: { xs: 2.25, sm: 3 },
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1.5,
                                    mb: 1.5,
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 40,
                                        height: 40,
                                        display: "grid",
                                        placeItems: "center",
                                        borderRadius: "9px",
                                        bgcolor: "#eaf2e6",
                                        color: "#286344",
                                    }}
                                >
                                    <CasinoRoundedIcon />
                                </Box>
                                <Typography
                                    component="h3"
                                    sx={{
                                        fontSize: 19,
                                        fontWeight: 800,
                                        letterSpacing: 0,
                                        color: "#203b2e",
                                    }}
                                >
                                    Random Match
                                </Typography>
                            </Box>
                            <Typography
                                sx={{
                                    minHeight: { xs: 0, sm: 48 },
                                    color: "#6b7b72",
                                    fontSize: 14,
                                    lineHeight: 1.6,
                                    mb: 2.5,
                                }}
                            >
                                Матч со случайными командами
                            </Typography>
                            <Button
                                onClick={() => startMode("random-match")}
                                variant="contained"
                                endIcon={<ArrowForwardRoundedIcon />}
                                fullWidth
                            >
                                Создать случайный матч
                            </Button>
                        </Paper>

                        <Paper
                            sx={{
                                p: { xs: 2.25, sm: 3 },
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1.5,
                                    mb: 1.5,
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 40,
                                        height: 40,
                                        display: "grid",
                                        placeItems: "center",
                                        borderRadius: "9px",
                                        bgcolor: "#f2f3df",
                                        color: "#68731f",
                                    }}
                                >
                                    <EmojiEventsRoundedIcon />
                                </Box>
                                <Typography
                                    component="h3"
                                    sx={{
                                        fontSize: 19,
                                        fontWeight: 800,
                                        letterSpacing: 0,
                                        color: "#203b2e",
                                    }}
                                >
                                    Series
                                </Typography>
                            </Box>
                            <Typography
                                sx={{
                                    minHeight: { xs: 0, sm: 48 },
                                    color: "#6b7b72",
                                    fontSize: 14,
                                    lineHeight: 1.6,
                                    mb: 2.5,
                                }}
                            >
                                Создать серию встреч
                            </Typography>
                            <Button
                                onClick={() => startMode("series")}
                                variant="outlined"
                                endIcon={<ArrowForwardRoundedIcon />}
                                fullWidth
                            >
                                Создать серию
                            </Button>
                        </Paper>
                    </Box>
                </Box>
            </Container>
        </PageWrapper>
    );
};

export default HomePage;
