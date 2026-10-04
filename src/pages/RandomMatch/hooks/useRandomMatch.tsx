import { useEffect, useRef, useState } from "react";
import { countries } from "@/data/countries";
import type {
    RoulettePhase,
    RouletteTeam,
    TeamPair,
} from "@/types/roulette.types";
import usePlayersStorage from "@/hooks/usePlayersStorage";

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

const getRandomPair = (): TeamPair => {
    const firstIndex = Math.floor(Math.random() * teamPool.length);
    let secondIndex = Math.floor(Math.random() * (teamPool.length - 1));

    if (secondIndex >= firstIndex) {
        secondIndex += 1;
    }

    return {
        first: teamPool[firstIndex],
        second: teamPool[secondIndex],
    };
};

const useRandomMatch = () => {
    const { getPlayer } = usePlayersStorage();

    const playerOne = getPlayer("1");
    const playerTwo = getPlayer("2");

    const [teamPair, setTeamPair] = useState(getRandomPair);
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
        setTeamPair(getRandomPair());
        setPhase("spinning");

        const updateTeams = () => {
            setTeamPair(getRandomPair());
            timeoutRef.current = setTimeout(updateTeams, SPIN_INTERVAL);
        };

        timeoutRef.current = setTimeout(updateTeams, SPIN_INTERVAL);
    };

    const stopSpinning = () => {
        if (timeoutRef.current !== null) {
            clearTimeout(timeoutRef.current);
        }

        const finalPair = getRandomPair();
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

            setTeamPair(getRandomPair());
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
        playerOne,
        playerTwo,
        teamPair,
        phase,
        toggleSpinning,
    };
};

export default useRandomMatch;
