import { DateField, Show, SimpleShowLayout, TextField } from "react-admin";

export const SubmissionShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="contestId" />
            <TextField source="func" />
            <TextField source="description" />
            <DateField source="createdAt" showTime />
            <DateField source="updatedAt" showTime />
        </SimpleShowLayout>
    </Show>
);
