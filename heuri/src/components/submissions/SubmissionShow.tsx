import { Button, DateField, EditButton, Labeled, NumberField, ReferenceField, Show, SimpleShowLayout, TextField, TopToolbar, useRecordContext, useResourceContext } from "react-admin";
import { TestCaseList } from "../testCases/TestCaseList";
import CompareIcon from "@mui/icons-material/Compare";

const CompareButton = () => {
    const resource = useResourceContext();
    const record = useRecordContext();

    return <Button label="compare" href={`/#/${resource}/${record.id}/compare`} >
        <CompareIcon />
    </Button >;
};

const SubmissionShowActions = () => (
    <TopToolbar>
        <CompareButton />
        <EditButton />
    </TopToolbar>
);

export const SubmissionShow = () => (
    <Show actions={<SubmissionShowActions />}>
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
            <Labeled source="TestCases">
                <TestCaseList />
            </Labeled>
        </SimpleShowLayout>
    </Show>
);
