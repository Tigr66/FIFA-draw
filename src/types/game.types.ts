export type GameMode = "random-match" | "series";

export type PlayerNumbers = "1" | "2";

export type PlayerNames = {
    playerOne?: string;
    playerTwo?: string;
};

export type PlayerGoals = {
    playerOne: number;
    playerTwo: number;
};