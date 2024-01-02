import { Datagrid, DateField, EditButton, List, ShowButton, TextField } from "react-admin";

export const ContestList = () => (
    <List
        sort={{ field: "updatedAt", order: "DESC" }}
    >
        <Datagrid rowClick={(id, resource) => {
            return `/${resource}/${id}/submissions`;
        }}>
            {/* <TextField source="id" /> */}
            <TextField source="name" />
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
