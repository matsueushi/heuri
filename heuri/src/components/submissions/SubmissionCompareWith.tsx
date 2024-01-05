import { useParams } from "react-router-dom";
import { DateField, NumberField, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";
import Grid from "@mui/material/Grid";

export const SubmissionCompareWith = () => {
    const { submissionId, baseSubmissionId } = useParams();

    return <>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Show resource="submissions" id={submissionId}>
                    <SimpleShowLayout>
                        <TextField source="id" />
                        <ReferenceField source="contestId" reference="contests">
                            <TextField source="name" />
                        </ReferenceField>
                        <TextField source="functionName" />
                        <TextField source="description" />
                        <TextField source="status" />
                        <NumberField source="testcases" />
                        <NumberField source="completed" />
                        <DateField source="createdAt" showTime />
                        <DateField source="updatedAt" showTime />
                    </SimpleShowLayout>
                </Show>
            </Grid>
            <Grid item xs={6}>
                <Show resource="submissions" id={baseSubmissionId}>
                    <SimpleShowLayout>
                        <TextField source="id" />
                        <ReferenceField source="contestId" reference="contests">
                            <TextField source="name" />
                        </ReferenceField>
                        <TextField source="functionName" />
                        <TextField source="description" />
                        <TextField source="status" />
                        <NumberField source="testcases" />
                        <NumberField source="completed" />
                        <DateField source="createdAt" showTime />
                        <DateField source="updatedAt" showTime />
                    </SimpleShowLayout>
                </Show>
            </Grid>
        </Grid>
    </>;
};
