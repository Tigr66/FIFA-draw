import { ActionsWrapper } from "@/components/ActionsWrapper";
import { Add, PlayArrow } from "@mui/icons-material";
import { Button } from "@mui/material";

interface SeriesResultsActionsProps {
    onNewSeries: () => void;
    onResumeSeries: () => void;
}

const SeriesResultsActions = ({
    onNewSeries,
    onResumeSeries,
}: SeriesResultsActionsProps) => {
    return (
        <ActionsWrapper>
            <Button
                startIcon={<Add />}
                variant="outlined"
                onClick={onNewSeries}
            >
                Новая серия
            </Button>

            <Button
                startIcon={<PlayArrow />}
                variant="contained"
                onClick={onResumeSeries}
            >
                Возобновить серию
            </Button>
        </ActionsWrapper>
    );
};

export default SeriesResultsActions;
