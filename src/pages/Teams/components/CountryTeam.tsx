import type { Team } from "@/types/team";
import { Box, Typography } from "@mui/material";

interface CountryTeamProps {
    team: Team;
}

const CountryTeam = ({ team }: CountryTeamProps) => {
    return (
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
    );
};

export default CountryTeam;
