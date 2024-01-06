import { EditButton, Show, ShowButton, TopToolbar } from "react-admin";
import { useParams } from "react-router-dom";
import { SubmissionShowLayout } from "./SubmissionShowLayout";

const SubmissionCompareActions = () => (
    <TopToolbar>
        <ShowButton />
        <EditButton />
    </TopToolbar>
);

export const SubmissionCompare = () => {
    const { submissionId } = useParams();

    return <>
        <Show resource="submissions" id={submissionId} actions={<SubmissionCompareActions />} >
            <SubmissionShowLayout />
        </Show >
        something...
    </>;
};
