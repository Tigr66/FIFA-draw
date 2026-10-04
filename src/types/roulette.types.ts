import type { Team } from "./team.types";

export type RoulettePhase = "empty" | "spinning" | "stopping" | "ready";

export const roulettePhaseLabels: Record<RoulettePhase, string> = {
    empty: "НЕ ВЫБРАНО",
    spinning: "ВРАЩЕНИЕ",
    stopping: "ЗАМЕДЛЕНИЕ",
    ready: "ВЫБРАНО",
};

export interface RouletteTeam extends Team {
    countryName: string;
    countryFlag: string;
}

export type TeamPair = {
    first: RouletteTeam;
    second: RouletteTeam;
};
