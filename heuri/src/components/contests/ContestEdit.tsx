import { DateField, Edit, Labeled, SimpleForm, TextField, TextInput } from "react-admin";

export const ContestEdit = () => (
    <Edit>
        <SimpleForm>
            <Labeled>
                <TextField source="id" />
            </Labeled>
            <Labeled>
                <TextField source="name" />
            </Labeled>
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
