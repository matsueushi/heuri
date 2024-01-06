import { DateField, NumberField, ReferenceField, SimpleShowLayout, TextField, UrlField } from "react-admin";

export const TestCaseShowLayout = () => (
    <SimpleShowLayout>
        <TextField source="id" />
        <ReferenceField source="submissionId" reference="submissions">
            <TextField source="id" />
        </ReferenceField>
        <TextField source="status" />
        <UrlField source="workingDir" />
        <UrlField source="output" />
        <TextField source="seed" />
        <NumberField source="score" />
        <DateField source="startedAt" showTime />
        <DateField source="endedAt" showTime />
    </SimpleShowLayout>
);
