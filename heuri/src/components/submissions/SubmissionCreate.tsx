import { v4 as uuidv4 } from "uuid";

import {
    Create,
    SimpleForm,
    TextInput,

} from "react-admin";
import { useContext } from "react";
import { TestContext } from "../../contexts/testContexts";

export const SubmissionCreate = () => {
    const isTest = useContext(TestContext);
    const transform = (data: any) => {
        if (isTest) {
            return {};
        } else {
            return {
                ...data,
                id: uuidv4(),
                createdAt: new Date(),
                updatedAt: new Date(),
            };
        }
    };

    return (
        <Create redirect="list" transform={transform}>
            <SimpleForm>
                <TextInput source="contestId" />
                <TextInput source="functionName" />
                <TextInput source="description" />
            </SimpleForm>
        </Create>
    );
};
