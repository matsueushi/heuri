import { Datagrid, DateField, EditButton, List, ReferenceField, ShowButton, TextField } from "react-admin";
import { useParams } from "react-router-dom";

export const SubmissionList = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <List
            resource="submissions"
            sort={{ field: "updatedAt", order: "DESC" }}
            filter={id ? { contestId: id } : {}}
        >
            <Datagrid rowClick={(id, resource) => {
                return `/${resource}/${id}/testcases`;
            }}>
                <TextField source="id" />
                {/* <TextField source="contestId" /> */}
                <ReferenceField source="contestId" reference="contests">
                    <TextField source="name" />
                </ReferenceField>
                <TextField source="functionName" />
                <TextField source="description" />
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
