import { DateTimeInput, Edit, SimpleForm, TextInput } from "react-admin";

export const ContestEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="name" />
            <TextInput source="description" />
            <DateTimeInput source="createdAt" disabled />
            <DateTimeInput source="updatedAt" />
        </SimpleForm>
    </Edit>
);
