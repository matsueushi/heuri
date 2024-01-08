import { Stack } from "@mui/material";
import { BeforeAfterField } from "./BeforeAfterField";
import { TestCasesStats } from "./stats";

interface BeforeAfterFieldsProps {
    before: TestCasesStats,
    after: TestCasesStats,
}

export const BeforeAfterFields = ({ before, after }: BeforeAfterFieldsProps) => {
    return <Stack>
        <BeforeAfterField
            source="totalScore"
            before={before.total}
            after={after.total}
        />
        <BeforeAfterField
            source="averageScore"
            before={Math.round(before.avg)}
            after={Math.round(after.avg)}
        />
        <BeforeAfterField
            source="maxScore"
            before={before.max}
            after={after.max}
        />
        <BeforeAfterField
            source="minScore"
            before={before.min}
            after={after.min}
        />
        <BeforeAfterField
            source="variance"
            before={Math.round(before.variance)}
            after={Math.round(after.variance)}
        />
    </Stack>;
};
