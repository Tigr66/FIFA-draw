import { SlideTransition } from "@/components/SlideTransition";
import type { Series } from "@/types/series.types";
import { ArrowBackRounded } from "@mui/icons-material";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Tooltip,
    Typography,
} from "@mui/material";

interface ExistingSeriesDialogProps {
    open: boolean;
    series: Series;
    onContinue: () => void;
    onNewSeries: () => void;
    onBack: () => void;
}

const ExistingSeriesDialog = ({
    open,
    series,
    onContinue,
    onNewSeries,
    onBack,
}: ExistingSeriesDialogProps) => {
    const { playerOne, playerTwo } = series;

    const isEnded: boolean = series.status === "ended";

    return (
        <Dialog
            open={open}
            slots={{
                transition: SlideTransition,
            }}
        >
            <DialogTitle
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    pr: 3,
                }}
            >
                <Tooltip title="Вернуться назад" placement="bottom">
                    <IconButton
                        onClick={onBack}
                        aria-label="Назад"
                        edge="start"
                        size="small"
                    >
                        <ArrowBackRounded />
                    </IconButton>
                </Tooltip>

                <Typography
                    component={"span"}
                    variant="h6"
                    sx={{
                        fontWeight: 600,
                        fontSize: {
                            xs: 16,
                            sm: 20,
                        },
                    }}
                >
                    {isEnded
                        ? "Есть сохраненная серия"
                        : "Найдена незавершённая серия"}
                </Typography>
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
                <Button onClick={onContinue} variant="contained">
                    {isEnded ? "Посмотреть результаты" : "Продолжить серию"}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ExistingSeriesDialog;
