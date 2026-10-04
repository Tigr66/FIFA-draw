import type { Country } from "@/types/team.types";

export const france: Country = {
    id: "france",
    name: "France",
    flag: "/countries/fr.svg",
    teams: [
        {
            id: "psg",
            name: "PSG",
            logo: "/france/PSG.svg",
        },
        {
            id: "marseille",
            name: "Marseille",
            logo: "/france/Marseille.svg",
        },
        {
            id: "monaco",
            name: "Monaco",
            logo: "/france/AS_Monaco.svg",
        },
        {
            id: "paris-fc",
            name: "Paris FC",
            logo: "/france/Paris_FC.svg",
        },
        {
            id: "lyon",
            name: "Lyon",
            logo: "/france/Olympique_Lyonnais.svg",
        },
    ],
};
