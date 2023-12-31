import { Datagrid, DateField, List, TextField } from "react-admin";

export const ContestList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <TextField source="description" />
            <DateField source="createdAt" showTime />
            <DateField source="updatedAt" showTime />
        </Datagrid>
    </List>
);
