import { DateInput, Edit, SimpleForm, TextInput } from "react-admin";

export const ContestEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="description" />
            <DateInput source="createdAt" />
            <DateInput source="updatedAt" />
            <TextInput source="owner" />
            <TextInput source="__typename" />
        </SimpleForm>
    </Edit>
);
