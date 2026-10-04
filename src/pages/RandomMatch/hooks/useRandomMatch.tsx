import { useEffect, useRef, useState } from "react";
import { countries } from "@/data/countries";
import type { Team } from "@/types/team.types";
import type { RoulettePhase } from "@/types/roulette.types";

interface RouletteTeam extends Team {
    key: string;
    countryName: string;
}

interface TeamPair {
    first: RouletteTeam;
    second: RouletteTeam;
}

const PLAYERS_STORAGE_KEY = "fifa-draw:players:";
const SPIN_INTERVAL = 75;
const STOP_STEPS = 9;

const teamPool: RouletteTeam[] = countries.flatMap((country) =>
    country.teams.map((team) => ({
        ...team,
        key: `${country.id}:${team.id}`,
        countryName: country.name,
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
    const [playerOne] = useState(
        () => localStorage.getItem(`${PLAYERS_STORAGE_KEY}1`) || "Игрок 1",
    );
    const [playerTwo] = useState(
        () => localStorage.getItem(`${PLAYERS_STORAGE_KEY}2`) || "Игрок 2",
    );
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
        teamCount: teamPool.length,
        phase,
        toggleSpinning,
    };
};

export default useRandomMatch;
