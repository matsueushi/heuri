import { Button, EditButton, Labeled, Show, SimpleShowLayout, TopToolbar, useRecordContext, useResourceContext } from "react-admin";
import CompareIcon from "@mui/icons-material/Compare";
import { SubmissionShowLayout } from "./SubmissionShowLayout";
import { TestCaseFilteredList } from "../testCases/TestCaseFilteredList";

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
        <Show actions={<></>} title=" ">
            <SimpleShowLayout>
                <Labeled source="TestCases">
                    <TestCaseFilteredList />
                </Labeled>
            </SimpleShowLayout>
        </Show >
    </>
);
