import { DateTimeInput, Edit, NumberInput, SimpleForm, TextInput } from "react-admin";

export const SubmissionEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" InputProps={{ disabled: true }} />
            <TextInput source="contestId" InputProps={{ disabled: true }} />
            <TextInput source="functionName" />
            <TextInput source="description" fullWidth />
            <TextInput source="status" InputProps={{ disabled: true }} />
            <NumberInput source="testcases" InputProps={{ disabled: true }} />
            <NumberInput source="completed" InputProps={{ disabled: true }} />
            <DateTimeInput source="createdAt" InputProps={{ disabled: true }} />
            <DateTimeInput source="updatedAt" InputProps={{ disabled: true }} />
        </SimpleForm>
    </Edit>
);
