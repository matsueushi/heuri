import { DateField, NumberField, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";
import { useParams } from "react-router-dom";

export const SubmissionCompare = () => {
    const { submissionId } = useParams();

    return <>
        <Show resource="submissions" id={submissionId}>
            <SimpleShowLayout>
                <TextField source="id" />
                <ReferenceField source="contestId" reference="contests">
                    <TextField source="name" />
                </ReferenceField>
                <TextField source="functionName" />
                <TextField source="description" />
                <TextField source="status" />
                <NumberField source="testcases" />
                <NumberField source="completed" />
                <DateField source="createdAt" showTime />
                <DateField source="updatedAt" showTime />
            </SimpleShowLayout>
        </Show>
    </>;
};
