import { DateField, Labeled, Show, SimpleShowLayout, TextField, UrlField } from "react-admin";
import { SubmissionFilteredList } from "../submissions/SubmissionFilteredList";
import { Paper } from "@mui/material";
import { useParams } from "react-router-dom";

export const ContestShow = () => {
    const { id } = useParams();

    return <>
        <Show >
            <SimpleShowLayout>
                <TextField source="id" />
                <TextField source="name" />
                <UrlField source="input" />
                <TextField source="description" />
                <DateField source="createdAt" showTime />
                <DateField source="updatedAt" showTime />
            </SimpleShowLayout>
        </Show >
        <Paper sx={{ padding: 2 }}>
            <Labeled source="submissions">
                <SubmissionFilteredList contestId={id} />
            </Labeled>
        </Paper>
    </>;
};
