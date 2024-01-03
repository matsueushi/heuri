import { ChipField, Datagrid, DateField, EditButton, List, NumberField, ReferenceField, ShowButton, TextField } from "react-admin";
import { useParams } from "react-router-dom";

export const SubmissionList = () => {
    const { id } = useParams();
    return (
        <List
            resource="submissions"
            sort={{ field: "updatedAt", order: "DESC" }}
            filter={id ? { contestId: id } : {}}
            hasCreate={id !== undefined}
        >
            <Datagrid rowClick="show">
                <TextField source="id" />
                {
                    id || <ReferenceField source="contestId" reference="contests">
                        <TextField source="name" />
                    </ReferenceField>
                }
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
