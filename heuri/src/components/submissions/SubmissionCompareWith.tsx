import { useParams } from "react-router-dom";
import { Datagrid, ListContextProvider, Loading, NumberField, Show, useGetManyReference, useList, } from "react-admin";
import { SubmissionShowLayout } from "./SubmissionShowLayout";
import Grid from "@mui/material/Grid";
import { useMemo } from "react";
import { Paper, Typography } from "@mui/material";
import { Scatter, ScatterChart, Tooltip, XAxis, YAxis, ZAxis } from "recharts";
import { CompareWithActions } from "./CompareWithActions";
import { BeforeAfterFields } from "./BeforeAfterFields";
import { computeStats } from "./stats";


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
                    id: seed,
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

    const listContext = useList({ data: combinedData.records });

    if (isLoading || isLoadingTarget) { return <Loading />; }
    if (error) { return <p>Error: {JSON.stringify(error)}</p>; }
    if (errorTarget) { return <p>Error: {JSON.stringify(errorTarget)}</p>; }

    return <>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Show
                    actions={<CompareWithActions id={id} />}
                    resource="submissions"
                    id={id}
                    title={`Submission #${id} vs #${targetId}`}
                >
                    <SubmissionShowLayout />
                </Show>
            </Grid>
            <Grid item xs={6}>
                <Show
                    actions={<CompareWithActions id={targetId} />}
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
                            <BeforeAfterFields
                                before={combinedData.beforeStats}
                                after={combinedData.afterStats}
                            />
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
                    <ListContextProvider value={listContext} >
                        <Datagrid
                            rowClick={(id, resource, record) => {
                                return `/testcases/${record.beforeTestCaseId}/compare/${record.afterTestCaseId}`;
                            }}
                            bulkActionButtons={false}
                        >
                            <NumberField source="seed" />
                            <NumberField source="beforeScore" />
                            <NumberField source="afterScore" />
                            <NumberField source="change" />
                        </Datagrid>
                    </ListContextProvider>
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
                </Paper>
            </Grid> */}

        </Grid >
    </>;
};
