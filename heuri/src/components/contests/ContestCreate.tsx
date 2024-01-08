import { v4 as uuidv4 } from "uuid";

import { Create, SimpleForm, TextInput, required } from "react-admin";
import { useContext } from "react";
import { TestContext } from "../../contexts/testContexts";

export const ContestCreate = () => {
    const isTest = useContext(TestContext);
    const transform = (data: any) => {
        if (isTest) {
            return {
                ...data,
                id: uuidv4(),
                createdAt: new Date(),
                updatedAt: new Date(),
            };
        } else {
            return data;
        }
    };

    return (
        <Create redirect="list" transform={transform}>
            <SimpleForm>
                <TextInput source="name" validate={required()} />
                <TextInput source="workingDir" validate={required()} />
                <TextInput source="description" />
            </SimpleForm>
        </Create>
    );
};
