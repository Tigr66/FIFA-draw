import type { Team } from "./team.types";

export type MatchStatus = "not-started" | "ended";

export type SeriesStatus = "in-progress" | "ended";

export type SeriesAction = "new" | "continue";

export type MatchPlayer = {
    teamId: string;
    score: number;
};

export type SeriesMatch = {
    playerOne: MatchPlayer;
    playerTwo: MatchPlayer;
};

export type Series = {
    playerOne: string;
    playerTwo: string;
    matches: SeriesMatch[];
    status: SeriesStatus;
};

export type StatisticMatchPlayer = {
    name: string;
    score: number;
    team: Team | null;
};

export type SeriesStatisticMatch = {
    playerOne: StatisticMatchPlayer;
    playerTwo: StatisticMatchPlayer;
};

export type SeriesWinPercentages = {
    playerOneWinPercentage: number;
    playerTwoWinPercentage: number;
    drawPercentage: number;
};

export type SeriesWinStatistics = {
    playerOneWins: number;
    playerTwoWins: number;
    draws: number;
};
