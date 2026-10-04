import { appRoutes } from "@/routes/app-routes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { GameMode } from "@/types/game";
import usePlayersStorage from "@/hooks/usePlayersStorage";

const useHomePage = () => {
    const navigate = useNavigate();

    const { setPlayer, getPlayer } = usePlayersStorage();

    const [playerOne, setPlayerOne] = useState(getPlayer("1"));
    const [playerTwo, setPlayerTwo] = useState(getPlayer("2"));
    const [submitted, setSubmitted] = useState(false);

    const playerOneMissing = submitted && !playerOne.trim();
    const playerTwoMissing = submitted && !playerTwo.trim();

    const startMode = (mode: GameMode) => {
        setSubmitted(true);

        const firstPlayer = playerOne.trim();
        const secondPlayer = playerTwo.trim();
        
        if (!firstPlayer || !secondPlayer) return;

        setPlayer("1", firstPlayer);
        setPlayer("2", secondPlayer);

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
