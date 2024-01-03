import { ChipField, Datagrid, DateField, List, NumberField, ReferenceField, ShowButton, TextField } from "react-admin";
import { useParams } from "react-router-dom";

export const TestCaseList = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <List
            resource="testcases"
            sort={{ field: "updatedAt", order: "DESC" }}
            filter={id ? { submissionId: id } : {}}
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
                {/* <UrlField source="input" />
                <UrlField source="output" /> */}
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