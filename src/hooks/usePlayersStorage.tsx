import type { PlayerNumbers } from "@/types/game.types";

const PLAYERS_STORAGE_KEY = "fifa-draw:players:";

const usePlayersStorage = () => {
    const getPlayer = (number: PlayerNumbers) => {
        return (
            localStorage.getItem(PLAYERS_STORAGE_KEY + number) ||
            `Игрок ${number}`
        );
    };

    const setPlayer = (number: PlayerNumbers, name: string) => {
        localStorage.setItem(PLAYERS_STORAGE_KEY + number, name);
    };

    return { getPlayer, setPlayer };
};

export default usePlayersStorage;
