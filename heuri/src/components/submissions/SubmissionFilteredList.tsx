import { ChipField, CreateButton, Datagrid, DateField, EditButton, ExportButton, List, NumberField, ReferenceField, ShowButton, TextField, TopToolbar } from "react-admin";
import { useParams } from "react-router-dom";

export const SubmissionFilteredList = () => {
    const { id } = useParams();

    const ListActions = () => (
        <TopToolbar>
            <CreateButton to={`/submissions/create?contestId=${id}`} />
            <ExportButton />
        </TopToolbar>
    );

    return (
        <List
            actions={<ListActions />}
            resource="submissions"
            sort={{ field: "updatedAt", order: "DESC" }}
            filter={{ contestId: id }}
            title=" "
        >
            <Datagrid rowClick="show">
                <TextField source="id" />
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
