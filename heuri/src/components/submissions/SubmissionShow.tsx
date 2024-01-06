import { Button, DateField, EditButton, Labeled, NumberField, ReferenceField, Show, SimpleShowLayout, TextField, TopToolbar, useRecordContext, useResourceContext } from "react-admin";
import { TestCaseList } from "../testCases/TestCaseList";
import CompareIcon from "@mui/icons-material/Compare";
import { SubmissionShowLayout } from "./SubmissionShowLayout";

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
    <>
        <Show actions={<SubmissionShowActions />}>
            <SubmissionShowLayout />
        </Show>
        <Show actions={<></>}>
            <SimpleShowLayout>
                <Labeled source="TestCases">
                    <TestCaseList />
                </Labeled>
            </SimpleShowLayout>
        </Show >
    </>
);
