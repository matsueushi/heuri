import { v4 as uuidv4 } from "uuid";

import {
    Create,
    SimpleForm,
    TextInput,
    required,
} from "react-admin";
import { useContext } from "react";
import { useLocation } from "react-router-dom";

import { TestContext } from "../../contexts/testContexts";

export const SubmissionCreate = () => {
    const search = useLocation().search;
    const query = new URLSearchParams(search);
    const contestId = query.get("contestId");

    const isTest = useContext(TestContext);
    const transform = (data: any) => {
        if (isTest) {
            return {
                ...data,
                id: uuidv4(),
                status: "runnnig",
                testcases: 0,
                score: 0,
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
                <TextInput source="contestId" defaultValue={contestId} validate={required()} />
                <TextInput source="functionName" validate={required()} />
                <TextInput source="seeds" multiline validate={required()} />
                <TextInput source="description" />
            </SimpleForm>
        </Create>
    );
};
