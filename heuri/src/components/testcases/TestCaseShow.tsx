import { NumberField, ReferenceField, Show, SimpleShowLayout, TextField, UrlField } from "react-admin";

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
            {/* <DateField source="createdAt" showTime />
            <DateField source="updatedAt" showTime /> */}
        </SimpleShowLayout>
    </Show>
);
