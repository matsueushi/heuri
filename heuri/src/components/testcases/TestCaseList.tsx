import { Datagrid, List, ReferenceField, TextField } from "react-admin";
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
            <Datagrid rowClick="show">
                <TextField source="id" />
                <ReferenceField source="submissionId" reference="submissions">
                    <TextField source="id" />
                </ReferenceField>
                <TextField source="seed" />
                <TextField source="score" />
                {/* <DateField source="createdAt" showTime /> */}
                {/* <DateField source="updatedAt" showTime /> */}
            </Datagrid>
        </List>
    );
};
