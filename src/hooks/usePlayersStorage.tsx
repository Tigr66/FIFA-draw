const PLAYERS_STORAGE_KEY = "fifa-draw:players:";

const usePlayersStorage = () => {
    const getPlayer = (number: string) => {
        return (
            localStorage.getItem(PLAYERS_STORAGE_KEY + number) ||
            `Игрок ${number}`
        );
    };

    const setPlayer = (number: string, name: string) => {
        localStorage.setItem(PLAYERS_STORAGE_KEY + number, name);
    };

    return { getPlayer, setPlayer };
};

export default usePlayersStorage;
