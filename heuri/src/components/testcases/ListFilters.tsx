import { SearchInput, TextInput } from "react-admin";

export const listFilters = [
    <SearchInput source="q" alwaysOn />,
    <TextInput label="Seed" source="seed" />
];
