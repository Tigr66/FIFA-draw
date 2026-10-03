import type { Country } from "@/types/team";

export const usa: Country = {
    id: "usa",
    name: "USA",
    flag: "/countries/us.svg",
    teams: [
        {
            id: "inter-miami",
            name: "Inter Miami",
            logo: "/usa/Inter_Miami_CF.svg",
        },
        {
            id: "los-angeles-fc",
            name: "Los Angeles FC",
            logo: "/usa/Los_Angeles_Football_Club.svg",
        },
    ],
};
