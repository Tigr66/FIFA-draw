import type { RouletteTeam, TeamPair } from "@/types/roulette.types";

export const getRandomPair = (
    teamPool: RouletteTeam[],
    firstExcludedTeamNames: string[] = [],
    secondExcludedTeamNames: string[] = [],
): TeamPair => {
    const firstAvailableTeams = teamPool.filter(
        (team) => !firstExcludedTeamNames.includes(team.name),
    );

    const firstIndex = Math.floor(Math.random() * firstAvailableTeams.length);

    const firstTeam = firstAvailableTeams[firstIndex];

    const secondAvailableTeams = teamPool.filter(
        (team) =>
            !secondExcludedTeamNames.includes(team.name) &&
            team.name !== firstTeam.name,
    );

    const secondIndex = Math.floor(Math.random() * secondAvailableTeams.length);

    const secondTeam = secondAvailableTeams[secondIndex];

    return {
        first: firstTeam,
        second: secondTeam,
    };
};
