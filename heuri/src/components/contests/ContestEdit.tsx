import { DateTimeInput, Edit, SimpleForm, TextInput } from "react-admin";

export const ContestEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" InputProps={{ disabled: true }} />
            <TextInput source="name" />
            <TextInput source="description" fullWidth />
            <DateTimeInput source="createdAt" InputProps={{ disabled: true }} />
            <DateTimeInput source="updatedAt" InputProps={{ disabled: true }} />
        </SimpleForm>
    </Edit>
);
