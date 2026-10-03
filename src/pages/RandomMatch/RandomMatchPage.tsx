import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Header } from "@/components/Header";
import { PageWrapper } from "@/components/PageWrapper";
import { appRoutes } from "@/routes/app-routes";
import useRandomMatch from "./hooks/useRandomMatch";

const RandomMatchPage = () => {
    const { playerOne, playerTwo, teamPair, teamCount, phase, toggleSpinning } =
        useRandomMatch();

    const isRolling = phase === "spinning" || phase === "stopping";
    const isStopping = phase === "stopping";
    const hasResult = phase === "complete";

    const rouletteSlots = [
        { playerName: playerOne, team: teamPair.first },
        { playerName: playerTwo, team: teamPair.second },
    ];

    const buttonLabel = isStopping
        ? "Замедляем рулетки..."
        : phase === "spinning"
          ? "Остановить обе рулетки"
          : hasResult
            ? "Запустить заново"
            : "Запустить рулетки";

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

            <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
                <Box
                    component="main"
                    sx={{ pt: { xs: 4, sm: 6, md: 8 }, pb: { xs: 5, md: 8 } }}
                >
                    <Box sx={{ mb: { xs: 3, sm: 4 }, textAlign: "center" }}>
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
                            Random Match
                        </Typography>
                        <Typography
                            sx={{
                                color: "#64766c",
                                fontSize: { xs: 14, sm: 16 },
                                overflowWrap: "anywhere",
                            }}
                        >
                            {playerOne} vs {playerTwo}
                        </Typography>
                        <Typography
                            sx={{ color: "#87958b", fontSize: 13, mt: 0.75 }}
                        >
                            Случайный выбор среди {teamCount} команд из всех
                            стран
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "minmax(0, 1fr)",
                                md: "repeat(2, minmax(0, 1fr))",
                            },
                            gap: { xs: 2, sm: 2.5, md: 3 },
                            mb: { xs: 2.5, sm: 3 },
                        }}
                    >
                        {rouletteSlots.map(({ playerName, team }, index) => (
                            <Paper
                                component="section"
                                key={index === 0 ? "player-one" : "player-two"}
                                aria-label={`Рулетка игрока ${playerName}`}
                                sx={{
                                    minWidth: 0,
                                    p: { xs: 2, sm: 3 },
                                    borderColor: hasResult
                                        ? "#a9c84f"
                                        : undefined,
                                    boxShadow: hasResult
                                        ? "0 8px 28px rgba(23, 77, 56, 0.1)"
                                        : "none",
                                    transition:
                                        "border-color 300ms ease, box-shadow 300ms ease",
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        gap: 1,
                                        mb: { xs: 1.5, sm: 2 },
                                    }}
                                >
                                    <Typography
                                        component="h2"
                                        sx={{
                                            minWidth: 0,
                                            fontSize: { xs: 17, sm: 20 },
                                            fontWeight: 800,
                                            color: "#203b2e",
                                            overflowWrap: "anywhere",
                                        }}
                                    >
                                        {playerName}
                                    </Typography>
                                    <Typography
                                        aria-live="polite"
                                        sx={{
                                            flexShrink: 0,
                                            color: hasResult
                                                ? "#56731b"
                                                : isRolling
                                                  ? "#8b791f"
                                                  : "#718077",
                                            fontSize: { xs: 11, sm: 12 },
                                            fontWeight: 750,
                                        }}
                                    >
                                        {hasResult
                                            ? "ВЫБРАНО"
                                            : isStopping
                                              ? "ЗАМЕДЛЕНИЕ"
                                              : isRolling
                                                ? "ВРАЩЕНИЕ"
                                                : "ГОТОВО"}
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        minHeight: {
                                            xs: 220,
                                            sm: 270,
                                            md: 300,
                                        },
                                        position: "relative",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        overflow: "hidden",
                                        px: { xs: 1.5, sm: 2 },
                                        py: { xs: 2.5, sm: 3 },
                                        borderRadius: "8px",
                                        bgcolor: hasResult
                                            ? "#f0f5df"
                                            : "#f3f6f0",
                                        transition:
                                            "background-color 300ms ease",
                                        "@keyframes roulette-team-change": {
                                            "0%": {
                                                opacity: 0.4,
                                                transform:
                                                    "translateY(8px) scale(.98)",
                                                filter: "blur(2px)",
                                            },
                                            "100%": {
                                                opacity: 1,
                                                transform:
                                                    "translateY(0) scale(1)",
                                                filter: "blur(0)",
                                            },
                                        },
                                    }}
                                >
                                    <Box
                                        key={team.key}
                                        sx={{
                                            width: "100%",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            animation: isRolling
                                                ? "roulette-team-change 120ms ease-out"
                                                : "none",
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src={team.logo}
                                            alt={`Эмблема: ${team.name}`}
                                            sx={{
                                                width: {
                                                    xs: 88,
                                                    sm: 108,
                                                    md: 120,
                                                },
                                                height: {
                                                    xs: 88,
                                                    sm: 108,
                                                    md: 120,
                                                },
                                                mb: { xs: 1.5, sm: 2 },
                                                objectFit: "contain",
                                                filter: isRolling
                                                    ? "drop-shadow(0 5px 10px rgba(23, 54, 41, 0.12))"
                                                    : "drop-shadow(0 8px 14px rgba(23, 54, 41, 0.14))",
                                                transition: "filter 200ms ease",
                                            }}
                                        />
                                        <Typography
                                            component="h3"
                                            sx={{
                                                maxWidth: "100%",
                                                textAlign: "center",
                                                color: "#173629",
                                                fontSize: {
                                                    xs: 20,
                                                    sm: 24,
                                                    md: 28,
                                                },
                                                lineHeight: 1.2,
                                                fontWeight: 850,
                                                letterSpacing: 0,
                                                overflowWrap: "anywhere",
                                            }}
                                        >
                                            {team.name}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                mt: 0.75,
                                                color: "#718077",
                                                fontSize: { xs: 12, sm: 13 },
                                            }}
                                        >
                                            {team.countryName}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Paper>
                        ))}
                    </Box>

                    <Box sx={{ maxWidth: 440, mx: "auto" }}>
                        <Button
                            onClick={toggleSpinning}
                            variant="contained"
                            fullWidth
                            disabled={isStopping}
                            sx={{
                                minHeight: { xs: 52, sm: 56 },
                                fontSize: { xs: 15, sm: 16 },
                            }}
                        >
                            {buttonLabel}
                        </Button>
                    </Box>
                </Box>
            </Container>
        </PageWrapper>
    );
};

export default RandomMatchPage;
