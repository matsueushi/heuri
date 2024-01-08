import { Labeled, Show, useRecordContext } from "react-admin";
import { useParams } from "react-router-dom";
import { SubmissionShowLayout } from "./SubmissionShowLayout";
import { Paper } from "@mui/material";
import { ReactNode } from "react";
import { SubmissionFilteredList } from "./SubmissionFilteredList";
import { CompareActions } from "./CompareActions";

interface CompareWrapperProps {
    children?: ReactNode
}

const CompareWrapper = ({ children }: CompareWrapperProps) => {
    const record = useRecordContext();
    return <Paper sx={{ width: 1 }}>
        {children}
        <Paper sx={{ padding: 2 }}>
            <Labeled source="compare with submissions">
                <SubmissionFilteredList
                    rowClick={(id) => {
                        return `./${id}`;
                    }}
                    contestId={record.contestId}
                />
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
            actions={<CompareActions />}
            component={CompareWrapper}
        >
            <SubmissionShowLayout />
        </Show >
    </>;
};
