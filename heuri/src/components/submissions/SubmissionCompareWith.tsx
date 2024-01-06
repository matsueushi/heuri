import { useParams } from "react-router-dom";
import { Button, EditButton, Identifier, Loading, Show, TopToolbar, useGetManyReference, useResourceContext, } from "react-admin";
import { SubmissionShowLayout } from "./SubmissionShowLayout";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/Star";

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
        <EditButton />
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
            <p>id</p>
            {data?.map(x => <li>
                {JSON.stringify(x)}
            </li>)}

            <p>targetId</p>
            {dataTarget?.map(x => <li>
                {JSON.stringify(x)}
            </li>)}
        </Grid >
    </>;
};
