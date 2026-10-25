import type { Series } from "@/types/series.types";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography,
} from "@mui/material";
import type { ReactNode } from "react";

interface ExistingSeriesDialogProps {
    open: boolean;
    series: Series;
    onContinue: () => void;
    onNewSeries: () => void;
}

const ExistingSeriesDialog = ({
    open,
    series,
    onContinue,
    onNewSeries,
}: ExistingSeriesDialogProps) => {
    const { playerOne, playerTwo } = series;

    const isEnded: boolean = series.status === "ended";

    return (
        <Dialog open={open}>
            <DialogTitle>
                {isEnded
                    ? "Есть сохраненная серия"
                    : "Найдена незавершённая серия"}
            </DialogTitle>
            <DialogContent>
                {isEnded ? (
                    <>
                        У вас есть завершенная серия между <b>{playerOne}</b> и{" "}
                        <b>{playerTwo}</b>. Хотите посмотреть её результаты или
                        начать новую?
                    </>
                ) : (
                    <>
                        У вас осталась незавершённая серия между{" "}
                        <b>{playerOne}</b> и <b>{playerTwo}</b>. Хотите
                        продолжить её или начать новую?
                    </>
                )}
            </DialogContent>
            <DialogActions
                sx={{
                    px: 3,
                    pb: 3,
                    pt: 1,
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: "auto auto",
                    },
                    justifyContent: {
                        xs: "stretch",
                        sm: "end",
                    },
                    gap: 1,
                    "& > :not(style) ~ :not(style)": {
                        ml: 0,
                    },
                }}
            >
                <Button onClick={onNewSeries} variant="outlined">
                    Начать новую
                </Button>
                <Button onClick={onContinue} variant="contained" autoFocus>
                    {isEnded ? "Посмотреть результаты" : "Продолжить серию"}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ExistingSeriesDialog;
