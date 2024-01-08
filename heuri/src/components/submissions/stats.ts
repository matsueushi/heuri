export interface TestCasesStats {
    total: number,
    avg: number,
    max: number,
    min: number,
    variance: number,
}

export const computeStats = (scores: number[]): TestCasesStats => {
    if (scores.length === 0) {
        return {
            total: 0,
            avg: 0,
            max: 0,
            min: 0,
            variance: 0,
        };
    } else {
        const total = scores.reduce((acc, score) => acc + score, 0);
        const avg = total / scores.length;
        const max = Math.max(...scores);
        const min = Math.min(...scores);
        const variance = scores.length > 1
            ? scores.reduce((acc, score) => acc + Math.pow(score - avg, 2), 0) /
            (scores.length - 1)
            : 0;

        return {
            total,
            avg,
            max,
            min,
            variance,
        };
    }
};
