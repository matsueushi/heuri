import { Datagrid, DateField, EditButton, List, ShowButton, TextField } from "react-admin";

export const SubmissionList = () => (
    <List
        sort={{ field: "updatedAt", order: "DESC" }}
    >
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="contestId" />
            <TextField source="func" />
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
