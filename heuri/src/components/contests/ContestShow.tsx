import { DateField, Show, SimpleShowLayout, TextField, UrlField } from "react-admin";
import { SubmissionList } from "../submissions/SubmissionList";

export const ContestShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <UrlField source="input" />
            <TextField source="description" />
            <DateField source="createdAt" showTime />
            <DateField source="updatedAt" showTime />
        </SimpleShowLayout>
        <SubmissionList />
    </Show>
);
