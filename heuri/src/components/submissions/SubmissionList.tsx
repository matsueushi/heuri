import { ChipField, Datagrid, DateField, ExportButton, List, NumberField, ReferenceField, SearchInput, TextField, TopToolbar } from "react-admin";

const filters = [
    <SearchInput source="q" alwaysOn />,
];

export const SubmissionList = () => {
    return (
        <List
            actions={
                <TopToolbar>
                    <ExportButton />
                </TopToolbar>
            }
            resource="submissions"
            filters={filters}
            sort={{ field: "updatedAt", order: "DESC" }}
        >
            <Datagrid rowClick="show">
                <TextField source="id" />
                <ReferenceField source="contestId" reference="contests">
                    <TextField source="name" />
                </ReferenceField>
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
