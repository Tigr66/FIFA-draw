import { Box, Stack, Typography } from "@mui/material";
import { CardWrapper } from "@/components/CardWrapper";
import type { SeriesStatisticMatch } from "@/types/series.types";

interface StatisticMatchCardProps {
    title: string;
    match: SeriesStatisticMatch | null;
}

const StatisticMatchCard = ({ title, match }: StatisticMatchCardProps) => {
    return (
        <CardWrapper title={title} sx={{ p: 2 }}>
            {match ? (
                <Stack spacing={2} sx={{ alignItems: "center" }}>
                    <Stack
                        direction="row"
                        spacing={2}
                        sx={{
                            width: "100%",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Stack
                            spacing={1}
                            sx={{
                                flex: 1,
                                alignItems: "center",
                                minWidth: 0,
                            }}
                        >
                            <Box
                                component="img"
                                src={match.playerOne.team?.logo}
                                alt={match.playerOne.team?.name}
                                sx={{
                                    width: { xs: 48, sm: 64 },
                                    height: { xs: 48, sm: 64 },
                                    objectFit: "contain",
                                }}
                            />

                            <Typography
                                variant="body1"
                                sx={{
                                    fontWeight: 600,
                                    textAlign: "center",
                                    overflowWrap: "anywhere",
                                }}
                            >
                                {match.playerOne.name}
                            </Typography>
                        </Stack>

                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 700,
                                whiteSpace: "nowrap",
                            }}
                        >
                            {match.playerOne.score} : {match.playerTwo.score}
                        </Typography>

                        <Stack
                            spacing={1}
                            sx={{
                                flex: 1,
                                alignItems: "center",
                                minWidth: 0,
                            }}
                        >
                            <Box
                                component="img"
                                src={match.playerTwo.team?.logo}
                                alt={match.playerTwo.team?.name}
                                sx={{
                                    width: { xs: 48, sm: 64 },
                                    height: { xs: 48, sm: 64 },
                                    objectFit: "contain",
                                }}
                            />

                            <Typography
                                variant="body1"
                                sx={{
                                    fontWeight: 600,
                                    textAlign: "center",
                                    overflowWrap: "anywhere",
                                }}
                            >
                                {match.playerTwo.name}
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            ) : (
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textAlign: "center", py: 2 }}
                >
                    Такого матча пока не было.
                </Typography>
            )}
        </CardWrapper>
    );
};

export default StatisticMatchCard;
