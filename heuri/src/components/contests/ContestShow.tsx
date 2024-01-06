import { DateField, Labeled, Show, SimpleShowLayout, TextField, UrlField, useRecordContext } from "react-admin";
import { SubmissionFilteredList } from "../submissions/SubmissionFilteredList";
import { Paper } from "@mui/material";
import { ReactNode } from "react";

interface ShowWrapperProps {
    children?: ReactNode
}

const ShowWrapper = ({ children }: ShowWrapperProps) => {
    const record = useRecordContext();
    return <Paper sx={{ width: 1 }}>
        {children}

        <Paper sx={{ padding: 2 }}>
            <Labeled source="submissions">
                <SubmissionFilteredList contestId={record.id} />
            </Labeled>
        </Paper>
    </Paper>;
};

export const ContestShow = () => {
    return <>
        <Show
            component={ShowWrapper}
        >
            <SimpleShowLayout>
                <TextField source="id" />
                <TextField source="name" />
                <UrlField source="input" />
                <TextField source="description" />
                <DateField source="createdAt" showTime />
                <DateField source="updatedAt" showTime />
            </SimpleShowLayout>
        </Show >
    </>;
};
