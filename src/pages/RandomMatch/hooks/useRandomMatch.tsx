import usePlayersStorage from "@/hooks/usePlayersStorage";
import useRoulette from "@/hooks/useRoulette";

const useRandomMatch = () => {
    const { getPlayer } = usePlayersStorage();
    const { teamPair, phase, toggleSpinning } = useRoulette();

    const playerOne = getPlayer("1");
    const playerTwo = getPlayer("2");

    const isRolling = phase === "spinning" || phase === "stopping";
    const isStopping = phase === "stopping";
    const hasResult = phase === "ready";

    const rouletteSlots = [
        { playerName: playerOne, team: teamPair?.first || null },
        { playerName: playerTwo, team: teamPair?.second || null },
    ];

    const buttonLabel = isStopping
        ? "Замедляем..."
        : isRolling
          ? "Остановить"
          : hasResult
            ? "Запустить заново"
            : "Запустить рулетки";

    return {
        playerOne,
        playerTwo,
        teamPair,
        phase,
        toggleSpinning,
        isRolling,
        isStopping,
        hasResult,
        rouletteSlots,
        buttonLabel,
    };
};

export default useRandomMatch;
