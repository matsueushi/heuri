import { Show } from "react-admin";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { TestCaseShowLayout } from "./TestCaseShowLayout";

export const TestCaseCompareWith = () => {
    const { id, targetId } = useParams();

    return <>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Show resource="testcases" id={id}>
                    <TestCaseShowLayout />
                </Show>
            </Grid>
            <Grid item xs={6}>
                <Show resource="testcases" id={targetId}>
                    <TestCaseShowLayout />
                </Show>
            </Grid>
        </Grid>
        something...
    </>;
};
