import { EditButton, Labeled, Show, ShowButton, TopToolbar, useRecordContext } from "react-admin";
import { useParams } from "react-router-dom";
import { SubmissionShowLayout } from "./SubmissionShowLayout";
import { Paper } from "@mui/material";
import { ReactNode } from "react";
import { SubmissionFilteredList } from "./SubmissionFilteredList";

const SubmissionCompareActions = () => (
    <TopToolbar>
        <ShowButton />
        <EditButton />
    </TopToolbar>
);

interface ShowWrapperProps {
    children?: ReactNode
}

const ShowWrapper = ({ children }: ShowWrapperProps) => {
    const record = useRecordContext();
    return <Paper sx={{ width: 1 }}>
        {children}
        <Paper sx={{ padding: 2 }}>
            <Labeled source="submissions">
                <SubmissionFilteredList contestId={record.contestId} />
            </Labeled>
        </Paper>
    </Paper>;
};

export const SubmissionCompare = () => {
    const { id } = useParams();

    return <>
        <Show
            resource="submissions"
            id={id}
            actions={<SubmissionCompareActions />}
            component={ShowWrapper}
        >
            <SubmissionShowLayout />
        </Show >
    </>;
};
