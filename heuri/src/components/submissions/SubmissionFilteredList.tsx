import { ChipField, Datagrid, DateField, Identifier, List, NumberField, RowClickFunction, SearchInput, TextField } from "react-admin";
import { FilteredListActions } from "./FilteredListActions";

interface SubmissionFilteredListProps {
    rowClick: string | RowClickFunction
    contestId?: Identifier,
}

const filters = [
    <SearchInput source="q" alwaysOn />,
];

export const SubmissionFilteredList = ({ rowClick, contestId }: SubmissionFilteredListProps) => {
    return (
        <List
            actions={<FilteredListActions id={contestId} />}
            resource="submissions"
            sort={{ field: "updatedAt", order: "DESC" }}
            filter={{ contestId: contestId }}
            filters={filters}
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
