import { ChipField, CreateButton, Datagrid, DateField, EditButton, ExportButton, List, NumberField, ReferenceField, ShowButton, TextField, TopToolbar } from "react-admin";
import { useParams } from "react-router-dom";

export const SubmissionList = () => {
    const { id } = useParams();

    const ListActions = () => (
        <TopToolbar>
            {id && <CreateButton to={`/submissions/create?contestId=${id}`} />}
            <ExportButton />
        </TopToolbar>
    );

    return (
        <List
            actions={<ListActions />}
            resource="submissions"
            sort={{ field: "updatedAt", order: "DESC" }}
            filter={id ? { contestId: id } : {}}
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
