import type { Country } from "@/types/team";

export const portugal: Country = {
    id: "portugal",
    name: "Portugal",
    flag: "/countries/pt.svg",
    teams: [
        {
            id: "porto",
            name: "Porto",
            logo: "/portugal/FC_Porto.svg",
        },
        {
            id: "sporting-cp",
            name: "Sporting CP",
            logo: "/portugal/Sporting_CP.svg",
        },
        {
            id: "benfica",
            name: "Benfica",
            logo: "/portugal/Benfica.svg",
        },
    ],
};
