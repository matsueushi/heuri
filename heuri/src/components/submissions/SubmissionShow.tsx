import { Button, EditButton, Labeled, Show, TopToolbar, useRecordContext, useResourceContext } from "react-admin";
import CompareIcon from "@mui/icons-material/Compare";
import { SubmissionShowLayout } from "./SubmissionShowLayout";
import { TestCaseFilteredList } from "../testCases/TestCaseFilteredList";
import { Paper } from "@mui/material";
import { ReactNode } from "react";

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

interface ShowWrapperProps {
    children?: ReactNode
}

const ShowWrapper = ({ children }: ShowWrapperProps) => {
    const record = useRecordContext();
    return <>
        <Paper sx={{ width: 1 }}>
            {children}
        </Paper>
        <Paper sx={{ width: 1, padding: 2 }}>
            <Labeled source="TestCases">
                <TestCaseFilteredList submissionId={record.id} />
            </Labeled>
        </Paper>
    </>;
};

export const SubmissionShow = () => {
    return <Show
        actions={<SubmissionShowActions />}
        component={ShowWrapper}
    >
        <SubmissionShowLayout />
    </Show>;
};
