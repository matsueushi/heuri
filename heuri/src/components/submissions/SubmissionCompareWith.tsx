import { useParams } from "react-router-dom";

export const SubmissionCompareWith = () => {
    const { submissionId, baseSubmissionId } = useParams();

    return <>
        submission {submissionId} compare with {baseSubmissionId}
    </>;
};
