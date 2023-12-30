import { DateField, Show, SimpleShowLayout, TextField } from "react-admin";

export const ContestShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
            <TextField source="owner" />
            <TextField source="__typename" />
        </SimpleShowLayout>
    </Show>
);
