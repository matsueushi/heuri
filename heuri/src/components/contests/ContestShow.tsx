import { DateField, Show, SimpleShowLayout, TextField } from "react-admin";

export const ContestShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <DateField source="createdAt" showTime />
            <DateField source="updatedAt" showTime />
            {/* <TextField source="owner" /> */}
            {/* <TextField source="__typename" /> */}
        </SimpleShowLayout>
    </Show>
);
