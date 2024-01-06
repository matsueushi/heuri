import { Button, EditButton, Labeled, Show, TopToolbar, useRecordContext, useResourceContext } from "react-admin";
import CompareIcon from "@mui/icons-material/Compare";
import { SubmissionShowLayout } from "./SubmissionShowLayout";
import { TestCaseFilteredList } from "../testCases/TestCaseFilteredList";
import { Paper } from "@mui/material";
import { useParams } from "react-router-dom";

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

export const SubmissionShow = () => {
    const { id } = useParams();

    return <>
        <Show actions={<SubmissionShowActions />}>
            <SubmissionShowLayout />
        </Show>
        <Paper sx={{ padding: 2 }}>
            <Labeled source="TestCases">
                <TestCaseFilteredList submissionId={id} />
            </Labeled>
        </Paper>
    </>;
};
