import { DateField, Edit, Labeled, NumberField, ReferenceField, SimpleForm, TextField, TextInput } from "react-admin";

export const SubmissionEdit = () => (
    <Edit>
        <SimpleForm>
            <Labeled>
                <TextField source="id" />
            </Labeled>
            <Labeled>
                <ReferenceField source="contestId" reference="contests">
                    <TextField source="name" />
                </ReferenceField>
            </Labeled>
            <Labeled>
                <TextField source="functionName" />
            </Labeled>
            <TextInput source="description" />
            <Labeled>
                <TextField source="status" />
            </Labeled>
            <Labeled>
                <NumberField source="testcases" />
            </Labeled>
            <Labeled>
                <NumberField source="completed" />
            </Labeled>
            <Labeled>
                <DateField source="createdAt" showTime />
            </Labeled>
            <Labeled>
                <DateField source="updatedAt" showTime />
            </Labeled>
        </SimpleForm>
    </Edit>
);
