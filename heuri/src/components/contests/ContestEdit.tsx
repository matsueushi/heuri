import { DateField, DateTimeInput, Edit, Labeled, SimpleForm, TextField, TextInput } from "react-admin";

export const ContestEdit = () => (
    <Edit>
        <SimpleForm>
            <Labeled>
                <TextField source="id" />
            </Labeled>
            <TextInput source="name" />
            <TextInput source="description" />
            <Labeled>
                <DateField source="createdAt" showTime />
            </Labeled>
            <Labeled>
                <DateField source="updatedAt" showTime />
            </Labeled>
        </SimpleForm>
    </Edit>
);
