import { ActionsWrapper } from "@/components/ActionsWrapper";
import { Add, Flag } from "@mui/icons-material";
import { Button } from "@mui/material";

interface SeriesActionsProps {
    onAddMatch: () => void;
    onFinishSeries: () => void;
}

const SeriesActions = ({ onAddMatch, onFinishSeries }: SeriesActionsProps) => {
    return (
        <ActionsWrapper>
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
        </ActionsWrapper>
    );
};

export default SeriesActions;
