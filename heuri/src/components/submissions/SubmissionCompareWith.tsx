import { useParams } from "react-router-dom";
import { Button, Datagrid, FunctionField, Identifier, Loading, NumberField, Show, ShowButton, TopToolbar, useGetManyReference, useResourceContext, } from "react-admin";
import { SubmissionShowLayout } from "./SubmissionShowLayout";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/Star";
import { useMemo } from "react";
import { Paper } from "@mui/material";

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

    const merged = useMemo(() => {
        if (data && dataTarget) {
            const beforeSeeds = new Set<number>(data.map((x) => x.seed));
            const afterSeeds = new Set<number>(dataTarget.map((x) => x.seed));
            const commonSeeds = [...beforeSeeds].filter((x) => afterSeeds.has(x));
            const result = [...commonSeeds].map((seed) => {
                const x = data.find((x) => x.seed === seed);
                const y = dataTarget.find((y) => y.seed === seed);
                return {
                    seed: seed,
                    beforeTestCaseId: x?.id ?? "",
                    afterTestCaseId: y?.id ?? "",
                    beforeScore: x?.score ?? 0,
                    afterScore: y?.score ?? 0,
                };
            });
            return result;
        } else {
            return [];
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
                    <Datagrid
                        data={merged}
                        sort={{ field: "seed", order: "ASC" }}
                        rowClick={(record) => {
                            console.log("rowClick", record);
                            return "show";
                        }}
                    >
                        <NumberField source="seed" />
                        <NumberField source="beforeScore" />
                        <NumberField source="afterScore" />
                        <FunctionField label="change" render={(record: any) => record.afterScore - record.beforeScore} />
                    </Datagrid>

                </Paper>
            </Grid>

            <Grid item xs={12}>
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
            </Grid>

        </Grid >
    </>;
};
