import { ChipField, Datagrid, DateField, Identifier, List, NumberField, TextField } from "react-admin";

interface TestCaseFilteredListProps {
    submissionId?: Identifier,
}

export const TestCaseFilteredList = ({ submissionId }: TestCaseFilteredListProps) => {
    return (
        <List
            resource="testcases"
            sort={{ field: "updatedAt", order: "DESC" }}
            filter={{ submissionId: submissionId }}
            title=" "
        >
            <Datagrid
                rowClick="show"
                bulkActionButtons={false}
            >
                <TextField source="id" />
                <ChipField source="status" />
                <TextField source="seed" />
                <NumberField source="score" />
                <DateField source="startedAt" showTime />
                <DateField source="endedAt" showTime />
            </Datagrid>
        </List>
    );
};
