import { ChipField, Datagrid, DateField, List, NumberField, ReferenceField, TextField } from "react-admin";
import { listFilters } from "./ListFilters";

export const TestCaseList = () => {
    return (
        <List
            resource="testcases"
            filters={listFilters}
            sort={{ field: "updatedAt", order: "DESC" }}
        >
            <Datagrid
                rowClick="show"
                bulkActionButtons={false}
            >
                <TextField source="id" />
                <ReferenceField source="submissionId" reference="submissions">
                    <TextField source="id" />
                </ReferenceField>
                <ChipField source="status" />
                <TextField source="seed" />
                <NumberField source="score" />
                <DateField source="startedAt" showTime />
                <DateField source="endedAt" showTime />
            </Datagrid>
        </List>
    );
};
