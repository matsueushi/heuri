import { Edit, Labeled, SimpleForm, TextField, TextInput } from "react-admin";

export const ContestEdit = () => (
    <Edit>
        <SimpleForm>
            <Labeled>
                <TextField source="id" />
            </Labeled>
            <Labeled>
                <TextField source="name" />
            </Labeled>
            <TextInput source="workingDir" />
            <TextInput source="functionName" />
            <TextInput source="description" />
        </SimpleForm>
    </Edit>
);
