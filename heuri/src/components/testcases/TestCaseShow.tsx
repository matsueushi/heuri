import { ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

export const TestCaseShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <ReferenceField source="submissionId" reference="submissions">
                <TextField source="id" />
            </ReferenceField>
            <TextField source="seed" />
            <TextField source="score" />
            {/* <DateField source="createdAt" showTime />
            <DateField source="updatedAt" showTime /> */}
        </SimpleShowLayout>
    </Show>
);
