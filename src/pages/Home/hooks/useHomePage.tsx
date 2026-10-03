import { appRoutes } from "@/routes/app-routes";
import type { GameMode } from "@/types/game";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PLAYERS_STORAGE_KEY = "fifa-draw:players:";

const useHomePage = () => {
    const navigate = useNavigate();
    const [playerOne, setPlayerOne] = useState(
        localStorage.getItem(PLAYERS_STORAGE_KEY + "1") || "",
    );
    const [playerTwo, setPlayerTwo] = useState(
        localStorage.getItem(PLAYERS_STORAGE_KEY + "2") || "",
    );
    const [submitted, setSubmitted] = useState(false);

    const playerOneMissing = submitted && !playerOne.trim();
    const playerTwoMissing = submitted && !playerTwo.trim();

    const startMode = (mode: GameMode) => {
        setSubmitted(true);

        const firstPlayer = playerOne.trim();
        const secondPlayer = playerTwo.trim();
        if (!firstPlayer || !secondPlayer) return;

        localStorage.setItem(PLAYERS_STORAGE_KEY + "1", firstPlayer);
        localStorage.setItem(PLAYERS_STORAGE_KEY + "2", secondPlayer);

        navigate(
            mode === "random-match"
                ? appRoutes.RANDOM_MATCH_PAGE
                : appRoutes.SERIES_PAGE,
        );
    };

    return {
        playerOne,
        setPlayerOne,
        playerTwo,
        setPlayerTwo,
        playerOneMissing,
        playerTwoMissing,
        startMode,
    };
};

export default useHomePage;
