import { countries } from "@/data/countries";
import type { Team } from "@/types/team.types";

export const getTeamById = (teamId: string): Team | null => {
    return (
        countries
            .flatMap((country) => country.teams)
            .find((team) => team.id === teamId) || null
    );
};
