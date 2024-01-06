import { Show } from "react-admin";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { TestCaseShowLayout } from "./TestCaseShowLayout";

export const TestCaseCompareWith = () => {
    const { testCaseId, baseTestCaseId } = useParams();

    return <>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Show resource="testcases" id={testCaseId}>
                    <TestCaseShowLayout />
                </Show>
            </Grid>
            <Grid item xs={6}>
                <Show resource="testcases" id={baseTestCaseId}>
                    <TestCaseShowLayout />
                </Show>
            </Grid>
        </Grid>
        something...
    </>;
};
