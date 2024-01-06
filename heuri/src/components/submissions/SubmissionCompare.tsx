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
    const { id } = useParams();

    return <>
        <Show resource="submissions" id={id} actions={<SubmissionCompareActions />} >
            <SubmissionShowLayout />
        </Show >
        something...
    </>;
};
