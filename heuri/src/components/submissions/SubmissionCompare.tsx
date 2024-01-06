import { Show } from "react-admin";
import { useParams } from "react-router-dom";
import { SubmissionShowLayout } from "./SubmissionShowLayout";

export const SubmissionCompare = () => {
    const { submissionId } = useParams();

    return <>
        <Show resource="submissions" id={submissionId}>
            <SubmissionShowLayout />
        </Show>
        something...
    </>;
};
