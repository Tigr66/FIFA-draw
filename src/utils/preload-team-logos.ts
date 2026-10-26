import { countries } from "@/data/countries";

export const preloadTeamLogos = async () => {
    const logos = countries.flatMap((contry) =>
        contry.teams.map((team) => team.logo),
    );

    await Promise.all(
        logos.map(
            (src) =>
                new Promise<void>((resolve) => {
                    const img = new Image();

                    img.onload = () => resolve();
                    img.onerror = () => resolve();

                    img.src = src;
                }),
        ),
    );
};
