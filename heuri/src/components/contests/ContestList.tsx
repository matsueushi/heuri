import { Datagrid, DateField, List, SearchInput, TextField } from "react-admin";

const filters = [
    <SearchInput source="q" alwaysOn />,
];

export const ContestList = () => (
    <List
        filters={filters}
        sort={{ field: "updatedAt", order: "DESC" }}
    >
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <DateField source="createdAt" showTime />
            <DateField source="updatedAt" showTime />
        </Datagrid>
    </List>
);
