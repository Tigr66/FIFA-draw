import { useState } from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CasinoRoundedIcon from "@mui/icons-material/CasinoRounded";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import SportsSoccerRoundedIcon from "@mui/icons-material/SportsSoccerRounded";
import {
    Box,
    Button,
    Container,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "@/routes/app-routes";

type GameMode = "random-match" | "series";

const PLAYERS_STORAGE_KEY = "fifa-draw:players";

const HomePage = () => {
    const navigate = useNavigate();
    const [playerOne, setPlayerOne] = useState("");
    const [playerTwo, setPlayerTwo] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const playerOneMissing = submitted && !playerOne.trim();
    const playerTwoMissing = submitted && !playerTwo.trim();

    const startMode = (mode: GameMode) => {
        setSubmitted(true);

        const firstPlayer = playerOne.trim();
        const secondPlayer = playerTwo.trim();
        if (!firstPlayer || !secondPlayer) return;

        const players = { playerOne: firstPlayer, playerTwo: secondPlayer };
        localStorage.setItem(PLAYERS_STORAGE_KEY, JSON.stringify(players));
        navigate(
            mode === "random-match"
                ? appRoutes.RANDOM_MATCH_PAGE
                : appRoutes.SERIES_PAGE,
            {
                state: { ...players, mode },
            },
        );
    };

    return (
        <Box
            sx={{
                minHeight: "100svh",
                overflowX: "hidden",
                bgcolor: "#f2f5ef",
                color: "#172a22",
            }}
        >
            <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
                <Box
                    component="header"
                    sx={{
                        minHeight: 76,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderBottom: "1px solid #dce4da",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1.25,
                        }}
                    >
                        <Box
                            sx={{
                                width: 36,
                                height: 36,
                                display: "grid",
                                placeItems: "center",
                                bgcolor: "#174d38",
                                color: "#d9f06b",
                                borderRadius: "10px",
                            }}
                        >
                            <SportsSoccerRoundedIcon fontSize="small" />
                        </Box>
                        <Typography
                            sx={{
                                fontWeight: 800,
                                fontSize: 16,
                                letterSpacing: 0,
                            }}
                        >
                            KICKOFF{" "}
                            <Box
                                component="span"
                                sx={{ color: "#648071", fontWeight: 500 }}
                            >
                                DRAW
                            </Box>
                        </Typography>
                    </Box>
                    <Typography
                        sx={{
                            display: { xs: "none", sm: "block" },
                            color: "#64766c",
                            fontSize: 13,
                            fontWeight: 600,
                        }}
                    >
                        YOUR NEXT MATCH STARTS HERE
                    </Typography>
                </Box>

                <Box
                    component="main"
                    sx={{ pt: { xs: 4, sm: 6, md: 8 }, pb: { xs: 5, md: 8 } }}
                >
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "1fr",
                                md: "1.12fr 0.88fr",
                            },
                            gap: { xs: 4, md: 7 },
                            alignItems: "center",
                            mb: { xs: 5, md: 7 },
                        }}
                    >
                        <Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                    mb: 2.5,
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 22,
                                        height: 2,
                                        bgcolor: "#9ebd32",
                                    }}
                                />
                                <Typography
                                    sx={{
                                        color: "#547163",
                                        fontWeight: 800,
                                        fontSize: 12,
                                        letterSpacing: 1.2,
                                    }}
                                >
                                    FAIR PLAY, ZERO SETUP
                                </Typography>
                            </Box>
                            <Typography
                                component="h1"
                                sx={{
                                    maxWidth: 620,
                                    fontSize: { xs: 42, sm: 54, md: 64 },
                                    lineHeight: 1.02,
                                    letterSpacing: 0,
                                    fontWeight: 850,
                                    color: "#173629",
                                    mb: 2.25,
                                }}
                            >
                                Let the draw decide.
                            </Typography>
                            <Typography
                                sx={{
                                    maxWidth: 500,
                                    color: "#5e7067",
                                    fontSize: { xs: 16, sm: 18 },
                                    lineHeight: 1.65,
                                }}
                            >
                                Хватит спорить, кто за кого играет. Введи имена,
                                выбери формат и доверь выбор случайности.
                            </Typography>
                        </Box>

                        <Box
                            aria-hidden="true"
                            sx={{
                                position: "relative",
                                minHeight: { xs: 190, sm: 230 },
                                display: "grid",
                                placeItems: "center",
                                overflow: "hidden",
                                borderRadius: "14px",
                                bgcolor: "#174d38",
                                color: "#f3f7ed",
                                backgroundImage:
                                    "linear-gradient(140deg, #1c5b40, #113d2d)",
                            }}
                        >
                            <Box
                                sx={{
                                    position: "absolute",
                                    inset: 18,
                                    border: "1px solid rgba(227,241,211,.28)",
                                    borderRadius: 1,
                                }}
                            />
                            <Box
                                sx={{
                                    position: "absolute",
                                    left: "50%",
                                    top: 18,
                                    bottom: 18,
                                    borderLeft:
                                        "1px solid rgba(227,241,211,.28)",
                                }}
                            />
                            <Box
                                sx={{
                                    position: "absolute",
                                    left: "50%",
                                    top: "50%",
                                    width: 92,
                                    height: 92,
                                    border: "1px solid rgba(227,241,211,.35)",
                                    borderRadius: "50%",
                                    transform: "translate(-50%, -50%)",
                                }}
                            />
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 2,
                                    position: "relative",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 800,
                                        fontSize: { xs: 23, sm: 28 },
                                        letterSpacing: 0,
                                    }}
                                >
                                    YOU
                                </Typography>
                                <Box
                                    sx={{
                                        width: 54,
                                        height: 54,
                                        display: "grid",
                                        placeItems: "center",
                                        borderRadius: "50%",
                                        bgcolor: "#d9f06b",
                                        color: "#173629",
                                        boxShadow:
                                            "0 8px 25px rgba(9,30,20,.22)",
                                    }}
                                >
                                    <CasinoRoundedIcon />
                                </Box>
                                <Typography
                                    sx={{
                                        fontWeight: 800,
                                        fontSize: { xs: 23, sm: 28 },
                                        letterSpacing: 0,
                                    }}
                                >
                                    VS
                                </Typography>
                            </Box>
                            <Typography
                                sx={{
                                    position: "absolute",
                                    bottom: 28,
                                    color: "#c2d5c6",
                                    fontSize: 12,
                                    fontWeight: 700,
                                    letterSpacing: 1.1,
                                }}
                            >
                                TWO PLAYERS. ONE DRAW.
                            </Typography>
                        </Box>
                    </Box>

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
                        elevation={0}
                        sx={{
                            p: { xs: 2, sm: 3 },
                            mb: 3,
                            border: "1px solid #dce5db",
                            borderRadius: "10px",
                            bgcolor: "#fff",
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
                                placeholder="Например, Алекс"
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
                                placeholder="Например, Сэм"
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
                            elevation={0}
                            sx={{
                                p: { xs: 2.25, sm: 3 },
                                border: "1px solid #dce5db",
                                borderRadius: "10px",
                                bgcolor: "#fff",
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
                                Один быстрый бросок жребия и случайные команды
                                для матча.
                            </Typography>
                            <Button
                                onClick={() => startMode("random-match")}
                                variant="contained"
                                endIcon={<ArrowForwardRoundedIcon />}
                                fullWidth
                                sx={{
                                    minHeight: 48,
                                    borderRadius: "7px",
                                    bgcolor: "#174d38",
                                    color: "#fff",
                                    fontWeight: 750,
                                    textTransform: "none",
                                    fontSize: 15,
                                    boxShadow: "none",
                                    "&:hover": {
                                        bgcolor: "#103d2c",
                                        boxShadow: "none",
                                    },
                                }}
                            >
                                К случайному матчу
                            </Button>
                        </Paper>

                        <Paper
                            elevation={0}
                            sx={{
                                p: { xs: 2.25, sm: 3 },
                                border: "1px solid #dce5db",
                                borderRadius: "10px",
                                bgcolor: "#fff",
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
                                Создай серию встреч и узнай, кто заберёт победу
                                в итоге.
                            </Typography>
                            <Button
                                onClick={() => startMode("series")}
                                variant="outlined"
                                endIcon={<ArrowForwardRoundedIcon />}
                                fullWidth
                                sx={{
                                    minHeight: 48,
                                    borderRadius: "7px",
                                    borderColor: "#bfd0c3",
                                    color: "#214b37",
                                    fontWeight: 750,
                                    textTransform: "none",
                                    fontSize: 15,
                                    "&:hover": {
                                        borderColor: "#174d38",
                                        bgcolor: "#f6f8f3",
                                    },
                                }}
                            >
                                Создать серию
                            </Button>
                        </Paper>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default HomePage;
