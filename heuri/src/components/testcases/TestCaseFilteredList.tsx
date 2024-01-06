import { ChipField, Datagrid, DateField, List, NumberField, ShowButton, TextField } from "react-admin";
import { useParams } from "react-router-dom";

export const TestCaseFilteredList = () => {
    const { id } = useParams();
    return (
        <List
            resource="testcases"
            sort={{ field: "updatedAt", order: "DESC" }}
            filter={{ submissionId: id }}
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
                <>
                    <ShowButton />
                </>
            </Datagrid>
        </List>
    );
};
