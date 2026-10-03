import type { Country } from "@/types/team";

export const turkey: Country = {
    id: "turkey",
    name: "Turkey",
    flag: "/countries/tr.svg",
    teams: [
        {
            id: "besiktas",
            name: "Beşiktaş",
            logo: "/turkey/Beşiktaş.svg",
        },
        {
            id: "galatasaray",
            name: "Galatasaray",
            logo: "/turkey/Galatasaray.svg",
        },
        {
            id: "fenerbahce",
            name: "Fenerbahçe",
            logo: "/turkey/Fenerbahçe.svg",
        },
    ],
};
