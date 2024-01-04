import { useParams } from "react-router-dom";

export const TestCaseCompareWith = () => {
    const { testCaseId, baseTestCaseId } = useParams();

    return <>
        testcase {testCaseId} compare with {baseTestCaseId}
    </>;
};
