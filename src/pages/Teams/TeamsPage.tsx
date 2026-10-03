import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import SportsSoccerRoundedIcon from "@mui/icons-material/SportsSoccerRounded";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { countries } from "@/data/countries";
import { appRoutes } from "@/routes/app-routes";

const TeamsPage = () => {
    const teamCount = countries.reduce(
        (total, country) => total + country.teams.length,
        0,
    );

    return (
        <Box
            sx={{
                minHeight: "100svh",
                overflowX: "hidden",
                bgcolor: "background.default",
                color: "text.primary",
            }}
        >
            <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
                <Box
                    component="header"
                    sx={{
                        minHeight: 76,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 1,
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
                                flexShrink: 0,
                                placeItems: "center",
                                bgcolor: "primary.main",
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
                            FIFA{" "}
                            <Box
                                component="span"
                                sx={{ color: "#648071", fontWeight: 500 }}
                            >
                                DRAW
                            </Box>
                        </Typography>
                    </Box>
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
                </Box>

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
                            <Paper
                                component="section"
                                key={country.id}
                                sx={{
                                    minWidth: 0,
                                    p: { xs: 1.75, sm: 2.5 },
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1.25,
                                        mb: 1.5,
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={country.flag}
                                        alt={`Флаг: ${country.name}`}
                                        loading="lazy"
                                        sx={{
                                            width: { xs: 34, sm: 40 },
                                            height: { xs: 23, sm: 27 },
                                            objectFit: "cover",
                                            flexShrink: 0,
                                            borderRadius: "3px",
                                            boxShadow:
                                                "0 0 0 1px rgba(23, 42, 34, 0.1)",
                                        }}
                                    />
                                    <Typography
                                        component="h2"
                                        sx={{
                                            minWidth: 0,
                                            flex: 1,
                                            fontSize: { xs: 18, sm: 20 },
                                            lineHeight: 1.25,
                                            fontWeight: 800,
                                            letterSpacing: 0,
                                            color: "#203b2e",
                                            overflowWrap: "anywhere",
                                        }}
                                    >
                                        {country.name}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            flexShrink: 0,
                                            color: "#718077",
                                            fontSize: 12,
                                            fontWeight: 700,
                                        }}
                                    >
                                        {country.teams.length}
                                    </Typography>
                                </Box>

                                <Box
                                    component="ul"
                                    sx={{
                                        display: "grid",
                                        gridTemplateColumns: {
                                            xs: "minmax(0, 1fr)",
                                            lg: "repeat(2, minmax(0, 1fr))",
                                        },
                                        columnGap: { xs: 0, lg: 1.5 },
                                        m: 0,
                                        p: 0,
                                        listStyle: "none",
                                    }}
                                >
                                    {country.teams.map((team) => (
                                        <Box
                                            component="li"
                                            key={team.id}
                                            sx={{
                                                minWidth: 0,
                                                display: "flex",
                                                alignItems: "center",
                                                gap: { xs: 1.25, sm: 1.5 },
                                                py: 1.25,
                                                borderTop: "1px solid #edf0eb",
                                            }}
                                        >
                                            <Box
                                                component="img"
                                                src={team.logo}
                                                alt={`Эмблема: ${team.name}`}
                                                loading="lazy"
                                                sx={{
                                                    width: { xs: 40, sm: 46 },
                                                    height: { xs: 40, sm: 46 },
                                                    objectFit: "contain",
                                                    flexShrink: 0,
                                                }}
                                            />
                                            <Typography
                                                sx={{
                                                    minWidth: 0,
                                                    color: "#32463a",
                                                    fontSize: {
                                                        xs: 13,
                                                        sm: 14,
                                                    },
                                                    lineHeight: 1.35,
                                                    fontWeight: 650,
                                                    overflowWrap: "anywhere",
                                                }}
                                            >
                                                {team.name}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </Paper>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default TeamsPage;
