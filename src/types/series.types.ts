export type MatchStatus = "not-started" | "ended";

export type SeriesStatus = "in-progress" | "ended";

export type MatchPlayer = {
    teamId: string;
    score: number;
};

export type SeriesMatch = {
    playerOne: MatchPlayer;
    playerTwo: MatchPlayer;
    status: MatchStatus;
};

export type Series = {
    playerOne: string;
    playerTwo: string;
    matches: SeriesMatch[];
    status: SeriesStatus;
};
