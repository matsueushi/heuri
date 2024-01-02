import { DateField, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

export const SubmissionShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <ReferenceField source="contestId" reference="contests">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="func" />
            <TextField source="description" />
            <DateField source="createdAt" showTime />
            <DateField source="updatedAt" showTime />
        </SimpleShowLayout>
    </Show>
);
