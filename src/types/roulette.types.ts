export type RoulettePhase = "empty" | "spinning" | "stopping" | "ready";

export const roulettePhaseLabels: Record<RoulettePhase, string> = {
    empty: "НЕ ВЫБРАНО",
    spinning: "ВРАЩЕНИЕ",
    stopping: "ЗАМЕДЛЕНИЕ",
    ready: "ВЫБРАНО",
};
