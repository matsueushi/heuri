import {
    DateTimeInput,
    Create,
    SimpleForm,
    TextInput,

} from "react-admin";

export const ContestCreate = () => {
    return (
        <Create redirect="list">
            <SimpleForm>
                <TextInput source="id" />
                <TextInput source="name" />
                <TextInput source="description" />
                <DateTimeInput source="createdAt" />
                <DateTimeInput source="updatedAt" />
            </SimpleForm>
        </Create>
    );
};
