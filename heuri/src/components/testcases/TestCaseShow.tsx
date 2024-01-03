import { DateField, NumberField, ReferenceField, Show, SimpleShowLayout, TextField, UrlField } from "react-admin";

export const TestCaseShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <ReferenceField source="submissionId" reference="submissions">
                <TextField source="id" />
            </ReferenceField>
            <TextField source="status" />
            <UrlField source="input" />
            <UrlField source="output" />
            <TextField source="seed" />
            <NumberField source="score" />
            <DateField source="startedAt" showTime />
            <DateField source="endedAt" showTime />
        </SimpleShowLayout>
    </Show>
);
