export type Team = {
    id: string;
    name: string;
    logo: string;
};

export type Country = {
    id: string;
    name: string;
    flag: string;
    teams: Team[];
};
