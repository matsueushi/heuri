import { DateTimeInput, Edit, SimpleForm, TextInput } from "react-admin";

export const SubmissionEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" InputProps={{ disabled: true }} />
            <TextInput source="contestId" InputProps={{ disabled: true }} />
            <TextInput source="func" />
            <TextInput source="description" />
            <DateTimeInput source="createdAt" InputProps={{ disabled: true }} />
            <DateTimeInput source="updatedAt" InputProps={{ disabled: true }} />
        </SimpleForm>
    </Edit>
);
