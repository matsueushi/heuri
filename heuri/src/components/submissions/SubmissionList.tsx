import { ChipField, Datagrid, DateField, ExportButton, List, NumberField, ReferenceField, TextField, TopToolbar } from "react-admin";

export const SubmissionList = () => {
    const ListActions = () => (
        <TopToolbar>
            <ExportButton />
        </TopToolbar>
    );

    return (
        <List
            actions={<ListActions />}
            resource="submissions"
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
