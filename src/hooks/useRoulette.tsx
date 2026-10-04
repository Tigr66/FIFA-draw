import { countries } from "@/data/countries";
import type {
    RoulettePhase,
    RouletteTeam,
    TeamPair,
} from "@/types/roulette.types";
import { getRandomPair } from "@/utils/get-random-pair.util";
import { useEffect, useRef, useState } from "react";

const SPIN_INTERVAL = 100;
const STOP_STEPS = 9;

const teamPool: RouletteTeam[] = countries.flatMap((country) =>
    country.teams.map((team) => ({
        ...team,
        key: `${country.id}:${team.id}`,
        countryName: country.name,
        countryFlag: country.flag,
    })),
);

const useRoulette = () => {
    const [teamPair, setTeamPair] = useState<TeamPair | null>(null);
    const [phase, setPhase] = useState<RoulettePhase>("empty");

    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(
        () => () => {
            if (timeoutRef.current !== null) {
                clearTimeout(timeoutRef.current);
            }
        },
        [],
    );

    const startSpinning = () => {
        setTeamPair(getRandomPair(teamPool));
        setPhase("spinning");

        const updateTeams = () => {
            setTeamPair(getRandomPair(teamPool));
            timeoutRef.current = setTimeout(updateTeams, SPIN_INTERVAL);
        };

        timeoutRef.current = setTimeout(updateTeams, SPIN_INTERVAL);
    };

    const stopSpinning = () => {
        if (timeoutRef.current !== null) {
            clearTimeout(timeoutRef.current);
        }

        const finalPair = getRandomPair(teamPool);
        let step = 0;
        setPhase("stopping");

        const slowDown = () => {
            step += 1;

            if (step >= STOP_STEPS) {
                setTeamPair(finalPair);
                setPhase("ready");
                timeoutRef.current = null;
                return;
            }

            setTeamPair(getRandomPair(teamPool));
            const progress = step / STOP_STEPS;
            const delay = SPIN_INTERVAL + Math.round(390 * progress ** 2);
            timeoutRef.current = setTimeout(slowDown, delay);
        };

        slowDown();
    };

    const toggleSpinning = () => {
        if (phase === "spinning") {
            stopSpinning();
            return;
        }

        if (phase !== "stopping") {
            startSpinning();
        }
    };

    return {
        teamPair,
        phase,
        toggleSpinning,
    };
};

export default useRoulette;
