import { countries } from "@/data/countries";
import type {
    RoulettePhase,
    RouletteTeam,
    TeamPair,
} from "@/types/roulette.types";
import { getRandomPair } from "@/utils/get-random-pair.util";
import { useEffect, useRef, useState } from "react";

const SPIN_INTERVAL = 100;
const SPIN_STOP_STEPS = 9;

const AUTO_SPIN_ITERATIONS = 30;
const AUTO_SPIN_DELAY = SPIN_INTERVAL * AUTO_SPIN_ITERATIONS;

const teamPool: RouletteTeam[] = countries.flatMap((country) =>
    country.teams.map((team) => ({
        ...team,
        countryName: country.name,
        countryFlag: country.flag,
    })),
);

const useRoulette = () => {
    const [teamPair, setTeamPair] = useState<TeamPair | null>(null);
    const [phase, setPhase] = useState<RoulettePhase>("empty");

    const [firstPlayerSelected, setFirstPlayerSelected] = useState<string[]>(
        [],
    );
    const [secondPlayerSelected, setSecondPlayerSelected] = useState<string[]>(
        [],
    );

    const shouldResetHistory =
        teamPool.length - firstPlayerSelected.length <= 2 ||
        teamPool.length - secondPlayerSelected.length <= 2;

    const spinTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const autoSpinTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
        null,
    );

    const startSpinning = () => {
        setTeamPair(getRandomPair(teamPool));
        setPhase("spinning");

        const updateTeams = () => {
            setTeamPair(getRandomPair(teamPool));
            spinTimeoutRef.current = setTimeout(updateTeams, SPIN_INTERVAL);
        };

        spinTimeoutRef.current = setTimeout(updateTeams, SPIN_INTERVAL);
    };

    const stopSpinning = () => {
        if (spinTimeoutRef.current !== null) {
            clearTimeout(spinTimeoutRef.current);
        }

        const finalPair = getRandomPair(
            teamPool,
            firstPlayerSelected,
            secondPlayerSelected,
        );

        let step = 0;
        setPhase("stopping");

        const slowDown = () => {
            step += 1;

            if (step >= SPIN_STOP_STEPS) {
                setTeamPair(finalPair);
                setPhase("ready");

                if (shouldResetHistory) {
                    setFirstPlayerSelected([]);
                    setSecondPlayerSelected([]);
                }

                setFirstPlayerSelected((prev) => [
                    ...prev,
                    finalPair.first.name,
                ]);
                setSecondPlayerSelected((prev) => [
                    ...prev,
                    finalPair.second.name,
                ]);

                spinTimeoutRef.current = null;
                return;
            }

            setTeamPair(getRandomPair(teamPool));
            const progress = step / SPIN_STOP_STEPS;

            const maxExtraDelay = 390;
            const slowdown = progress ** 2;

            const delay = SPIN_INTERVAL + Math.round(maxExtraDelay * slowdown);

            spinTimeoutRef.current = setTimeout(slowDown, delay);
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

    const autoSpining = () => {
        startSpinning();

        autoSpinTimeoutRef.current = setTimeout(stopSpinning, AUTO_SPIN_DELAY);
    };

    const resetTeams = () => {
        setPhase("empty");
        setTeamPair(null);
    };

    useEffect(() => {
        return () => {
            if (spinTimeoutRef.current !== null) {
                clearTimeout(spinTimeoutRef.current);
            }
            if (autoSpinTimeoutRef.current !== null) {
                clearTimeout(autoSpinTimeoutRef.current);
            }
        };
    }, []);

    const isRolling = phase === "spinning" || phase === "stopping";
    const isStopping = phase === "stopping";
    const hasResult = phase === "ready";

    return {
        teamPair,
        phase,
        toggleSpinning,
        autoSpining,
        resetTeams,
        isRolling,
        isStopping,
        hasResult,
    };
};

export default useRoulette;
