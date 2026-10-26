import { Add, Flag } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";

interface SeriesActionsProps {
    onAddMatch: () => void;
    onFinishSeries: () => void;
}

const SeriesActions = ({ onAddMatch, onFinishSeries }: SeriesActionsProps) => {
    return (
        <Stack
            className="slide-up"
            spacing={{ xs: 1.5, sm: 2 }}
            direction={{ xs: "column", sm: "row" }}
            sx={{
                justifyContent: "center",
                mt: { xs: 3, sm: 4 },
                width: "90%",
                maxWidth: 1440,
                mx: "auto",
            }}
        >
            <Button
                variant="outlined"
                startIcon={<Add />}
                onClick={onAddMatch}
                sx={{
                    minHeight: { xs: 44, sm: 48 },
                    px: { xs: 2, sm: 3 },
                    borderRadius: 2,
                }}
            >
                Новый матч
            </Button>

            <Button
                variant="contained"
                startIcon={<Flag />}
                onClick={onFinishSeries}
                sx={{
                    minHeight: { xs: 44, sm: 48 },
                    px: { xs: 2, sm: 3 },
                    borderRadius: 2,
                }}
            >
                Завершить серию
            </Button>
        </Stack>
    );
};

export default SeriesActions;
