import { ChipField, CreateButton, Datagrid, DateField, ExportButton, Identifier, List, NumberField, RowClickFunction, TextField, TopToolbar } from "react-admin";

interface SubmissionFilteredListProps {
    rowClick: string | RowClickFunction
    contestId?: Identifier,
}

export const SubmissionFilteredList = ({ rowClick, contestId }: SubmissionFilteredListProps) => {
    const ListActions = () => (
        <TopToolbar>
            <CreateButton to={`/submissions/create?contestId=${contestId}`} />
            <ExportButton />
        </TopToolbar>
    );

    return (
        <List
            actions={<ListActions />}
            resource="submissions"
            sort={{ field: "updatedAt", order: "DESC" }}
            filter={{ contestId: contestId }}
            title=" "
        >
            <Datagrid rowClick={rowClick}>
                <TextField source="id" />
                <TextField source="functionName" />
                <TextField source="description" />
                <ChipField source="status" />
                <NumberField source="testcases" />
                <NumberField source="score" />
                <DateField source="createdAt" showTime />
                <DateField source="updatedAt" showTime />
            </Datagrid>
        </List>
    );
};
