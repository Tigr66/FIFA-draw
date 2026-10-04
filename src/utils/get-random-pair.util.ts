import type { RouletteTeam, TeamPair } from "@/types/roulette.types";

export const getRandomPair = (teamPool: RouletteTeam[]): TeamPair => {
    const firstIndex = Math.floor(Math.random() * teamPool.length);

    let secondIndex = Math.floor(Math.random() * (teamPool.length - 1));

    if (secondIndex >= firstIndex) {
        secondIndex += 1;
    }

    return {
        first: teamPool[firstIndex],
        second: teamPool[secondIndex],
    };
};
