import { Box, Button, Container, Typography } from "@mui/material";
import { Header } from "@/components/Header";
import { PageWrapper } from "@/components/PageWrapper";
import useRandomMatch from "./hooks/useRandomMatch";
import { TeamRoulette } from "@/components/TeamRoulette";

const RandomMatchPage = () => {
    const { playerOne, playerTwo, teamPair, phase, toggleSpinning } =
        useRandomMatch();

    const isRolling = phase === "spinning" || phase === "stopping";
    const isStopping = phase === "stopping";
    const hasResult = phase === "ready";

    const rouletteSlots = [
        { playerName: playerOne, team: teamPair.first },
        { playerName: playerTwo, team: teamPair.second },
    ];

    const buttonLabel = isStopping
        ? "Замедляем..."
        : isRolling
          ? "Остановить"
          : hasResult
            ? "Запустить заново"
            : "Запустить рулетки";

    return (
        <PageWrapper>
            <Header showBackButton />

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
                            <TeamRoulette
                                key={index === 0 ? "player-one" : "player-two"}
                                team={team}
                                playerName={playerName}
                                hasResult={hasResult}
                                isRolling={isRolling}
                                phase={phase}
                            />
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
