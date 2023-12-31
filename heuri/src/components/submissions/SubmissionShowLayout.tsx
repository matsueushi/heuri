import { DateField, NumberField, ReferenceField, SimpleShowLayout, TextField } from "react-admin";

export const SubmissionShowLayout = () => {
    return <SimpleShowLayout>
        <TextField source="id" />
        <ReferenceField source="contestId" reference="contests">
            <TextField source="name" />
        </ReferenceField>
        <TextField source="functionName" />
        <TextField source="description" />
        <TextField source="status" />
        <NumberField source="testcases" />
        <NumberField source="score" />
        <DateField source="createdAt" showTime />
        <DateField source="updatedAt" showTime />
    </SimpleShowLayout>;
};
