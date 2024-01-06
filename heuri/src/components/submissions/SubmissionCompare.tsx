import { EditButton, Show, ShowButton, TopToolbar, useRecordContext } from "react-admin";
import { useParams } from "react-router-dom";
import { SubmissionShowLayout } from "./SubmissionShowLayout";
import { Paper } from "@mui/material";
import { ReactNode } from "react";

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
            {record.id}
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
