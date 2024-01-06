import { ChipField, CreateButton, Datagrid, DateField, EditButton, ExportButton, Identifier, List, NumberField, ShowButton, TextField, TopToolbar } from "react-admin";

interface SubmissionFilteredListProps {
    contestId?: Identifier
}

export const SubmissionFilteredList = ({ contestId }: SubmissionFilteredListProps) => {
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
            <Datagrid rowClick="show">
                <TextField source="id" />
                <TextField source="functionName" />
                <TextField source="description" />
                <ChipField source="status" />
                <NumberField source="testcases" />
                <NumberField source="completed" />
                <DateField source="createdAt" showTime />
                <DateField source="updatedAt" showTime />
                <>
                    <EditButton />
                    <ShowButton />
                </>
            </Datagrid>
        </List>
    );
};
