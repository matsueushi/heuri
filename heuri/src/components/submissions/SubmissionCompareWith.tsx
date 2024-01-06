import { useParams } from "react-router-dom";
import { Show, } from "react-admin";
import Grid from "@mui/material/Grid";
import { SubmissionShowLayout } from "./SubmissionShowLayout";

export const SubmissionCompareWith = () => {
    const { id, targetId } = useParams();

    return <>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Show resource="submissions" id={id}>
                    <SubmissionShowLayout />
                </Show>
            </Grid>
            <Grid item xs={6}>
                <Show resource="submissions" id={targetId}>
                    <SubmissionShowLayout />
                </Show>
            </Grid>
        </Grid>
    </>;
};
