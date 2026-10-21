import usePlayersStorage from "@/hooks/usePlayersStorage";
import useRoulette from "@/hooks/useRoulette";
import type { RoulleteSlot } from "@/types/roulette.types";

const useRandomMatch = () => {
    const { getPlayer } = usePlayersStorage();
    const {
        teamPair,
        phase,
        toggleSpinning,
        isRolling,
        isStopping,
        hasResult,
    } = useRoulette();

    const playerOne = getPlayer("1");
    const playerTwo = getPlayer("2");

    const rouletteSlots: RoulleteSlot[] = [
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
