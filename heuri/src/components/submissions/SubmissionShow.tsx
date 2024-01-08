import { Labeled, Show, useRecordContext } from "react-admin";
import { SubmissionShowLayout } from "./SubmissionShowLayout";
import { TestCaseFilteredList } from "../testCases/TestCaseFilteredList";
import { Paper } from "@mui/material";
import { ReactNode } from "react";
import { ShowActions } from "./ShowActions";


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
        actions={<ShowActions />}
        component={ShowWrapper}
    >
        <SubmissionShowLayout />
    </Show>;
};
