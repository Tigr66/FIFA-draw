import type { Country } from "@/types/team.types";
import { Box, Paper, Typography } from "@mui/material";
import CountryTeam from "./CountryTeam";

interface CountryCardProps {
    country: Country;
}

const CountryCard = ({ country }: CountryCardProps) => {
    return (
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
                        boxShadow: "0 0 0 1px rgba(23, 42, 34, 0.1)",
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
                    <CountryTeam key={team.id} team={team} />
                ))}
            </Box>
        </Paper>
    );
};

export default CountryCard;
