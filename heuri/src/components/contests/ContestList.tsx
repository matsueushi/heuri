import { Datagrid, DateField, List, TextField } from "react-admin";

export const ContestList = () => (
    <List>
        <Datagrid rowClick="edit">
            {/* <TextField source="id" /> */}
            <TextField source="name" />
            <TextField source="description" />
            <DateField source="createdAt" showTime />
            <DateField source="updatedAt" showTime />
            {/* <TextField source="owner" /> */}
            {/* <TextField source="__typename" /> */}
        </Datagrid>
    </List>
);
