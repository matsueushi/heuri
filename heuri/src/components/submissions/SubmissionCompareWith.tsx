import { useParams } from "react-router-dom";
import { Button, Datagrid, Identifier, Labeled, Loading, NumberField, Show, ShowButton, TopToolbar, useGetManyReference, useResourceContext, } from "react-admin";
import { SubmissionShowLayout } from "./SubmissionShowLayout";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/Star";
import { useMemo } from "react";
import { Paper, Stack, Typography } from "@mui/material";
import { Scatter, ScatterChart, Tooltip, XAxis, YAxis, ZAxis } from "recharts";

interface SetAsBestButtonProps {
    id?: Identifier,
}

const SetAsBestButton = ({ id }: SetAsBestButtonProps) => {
    const resource = useResourceContext();
    return <Button label="set as best" href={`/#/${resource}/${id}/compare`} >
        <StarIcon />
    </Button>;
};

interface CompareActionsProps {
    id?: Identifier,
}

const CompareActions = ({ id }: CompareActionsProps) => (
    <TopToolbar>
        <SetAsBestButton id={id} />
        <ShowButton />
    </TopToolbar>
);

interface TestCasesStats {
    total: number,
    avg: number,
    max: number,
    min: number,
    variance: number,
}

const computeStats = (scores: number[]): TestCasesStats => {
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

interface BeforeAfterFieldProps {
    source: string,
    before: number,
    after: number,
}

const BeforeAfterField = ({ source, before, after }: BeforeAfterFieldProps) => {
    return <Labeled source={source}>
        <Typography variant="body2">
            {before} → {after} ({after > before && "+"} {after - before})
        </Typography>
    </Labeled>;
};

export const SubmissionCompareWith = () => {
    const { id, targetId } = useParams();

    const { data, isLoading, error } = useGetManyReference(
        "testcases",
        {
            target: "submissionId",
            id: id,
            sort: { field: "seed", order: "ASC" }
        }
    );

    const { data: dataTarget, isLoading: isLoadingTarget, error: errorTarget } = useGetManyReference(
        "testcases",
        {
            target: "submissionId",
            id: targetId,
            sort: { field: "seed", order: "ASC" }
        }
    );

    const combinedData = useMemo(() => {
        if (data && dataTarget) {
            const beforeMap = new Map(data.map((obj) => [obj.seed, obj]));
            const afterMap = new Map(dataTarget.map((obj) => [obj.seed, obj]));
            console.log(beforeMap, afterMap);

            const beforeSeeds = new Set(beforeMap.keys());
            const afterSeeds = new Set(afterMap.keys());
            const commonSeeds = [...beforeSeeds].filter((seed) => afterSeeds.has(seed));
            const records = [...commonSeeds].map((seed) => {
                const x = beforeMap.get(seed);
                const y = afterMap.get(seed);
                const beforeScore = x?.score ?? 0;
                const afterScore = y?.score ?? 0;
                return {
                    seed: seed,
                    beforeTestCaseId: x?.id ?? "",
                    afterTestCaseId: y?.id ?? "",
                    beforeScore: beforeScore,
                    afterScore: afterScore,
                    change: afterScore - beforeScore,
                };
            });

            const scores: number[] = [...commonSeeds].map((seed) => beforeMap.get(seed)?.score ?? 0);
            const afterScores: number[] = [...commonSeeds].map((seed) => afterMap.get(seed)?.score ?? 0);

            const beforeStats = computeStats(scores);
            const afterStats = computeStats(afterScores);

            console.log(commonSeeds, scores, afterScores, beforeStats, afterStats);
            return { records, beforeStats, afterStats };
        } else {
            return { records: [], beforeStats: computeStats([]), afterStats: computeStats([]) };
        }
    }, [data, dataTarget]);

    if (isLoading || isLoadingTarget) { return <Loading />; }
    if (error) { return <p>Error: {JSON.stringify(error)}</p>; }
    if (errorTarget) { return <p>Error: {JSON.stringify(errorTarget)}</p>; }

    return <>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Show
                    actions={<CompareActions id={id} />}
                    resource="submissions"
                    id={id}
                    title={`Submission #${id} vs #${targetId}`}
                >
                    <SubmissionShowLayout />
                </Show>
            </Grid>
            <Grid item xs={6}>
                <Show
                    actions={<CompareActions id={targetId} />}
                    resource="submissions"
                    id={targetId}
                    title=" "
                >
                    <SubmissionShowLayout />
                </Show>
            </Grid>

            <Grid item xs={12}>
                <Paper sx={{ padding: 2 }}>
                    <Grid container>
                        <Grid item xs={3}>
                            <Typography>
                                Statistics for common testcases
                            </Typography>
                            <Stack>
                                <BeforeAfterField
                                    source="totalScore"
                                    before={combinedData.beforeStats.total}
                                    after={combinedData.afterStats.total}
                                />
                                <BeforeAfterField
                                    source="averageScore"
                                    before={Math.round(combinedData.beforeStats.avg)}
                                    after={Math.round(combinedData.afterStats.avg)}
                                />
                                <BeforeAfterField
                                    source="maxScore"
                                    before={combinedData.beforeStats.max}
                                    after={combinedData.afterStats.max}
                                />
                                <BeforeAfterField
                                    source="minScore"
                                    before={combinedData.beforeStats.min}
                                    after={combinedData.afterStats.min}
                                />
                                <BeforeAfterField
                                    source="variance"
                                    before={Math.round(combinedData.beforeStats.variance)}
                                    after={Math.round(combinedData.afterStats.variance)}
                                />
                            </Stack>
                        </Grid>
                        <Grid item xs={9}>
                            <ScatterChart
                                width={400}
                                height={400}
                            // onClick={(state, event) => { console.log(state, event); }}
                            >
                                <XAxis dataKey="beforeScore" name="before" type="number" />
                                <YAxis dataKey="afterScore" name="after" type="number" />
                                <ZAxis dataKey="seed" name="seed" type="number" />
                                <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                                <Scatter name="Score" data={combinedData.records} fill="#8884d8" />
                            </ScatterChart>
                        </Grid>

                    </Grid>

                </Paper>
            </Grid>

            <Grid item xs={12}>
                <Paper sx={{ padding: 2 }}>
                    <Datagrid
                        data={combinedData.records}
                        sort={{ field: "seed", order: "ASC" }}
                        rowClick={(id, resource, record) => {
                            return `/testcases/${record.beforeTestCaseId}/compare/${record.afterTestCaseId}`;
                        }}
                    >
                        <NumberField source="seed" />
                        <NumberField source="beforeScore" />
                        <NumberField source="afterScore" />
                        <NumberField source="change" />
                    </Datagrid>
                </Paper>
            </Grid>

            {/* <Grid item xs={12}>
                <Paper sx={{ padding: 2 }}>
                    <p>id</p>
                    {data?.map(x => <li>
                        {JSON.stringify(x)}
                    </li>)}

                    <p>targetId</p>
                    {dataTarget?.map(x => <li>
                        {JSON.stringify(x)}
                    </li>)}

                    {JSON.stringify(merged)}
                </Paper>
            </Grid> */}

        </Grid >
    </>;
};
