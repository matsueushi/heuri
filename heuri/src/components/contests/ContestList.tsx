import { Datagrid, DateField, List, TextField } from "react-admin";

export const ContestList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
            <TextField source="owner" />
            <TextField source="__typename" />
        </Datagrid>
    </List>
);
