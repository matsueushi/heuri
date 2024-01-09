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
    const workingDir = query.get("workingDir");
    const functionName = query.get("functionName");

    const isTest = useContext(TestContext);
    const transform = (data: any) => {
        if (isTest) {
            const modifiedData = {
                ...data,
                id: uuidv4(),
                status: "running",
                testcases: 0,
                score: 0,
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            return modifiedData;
        } else {
            return data;
        }
    };

    return (
        <Create redirect="list" transform={transform}>
            <SimpleForm>
                <TextInput source="contestId" defaultValue={contestId} validate={required()} />
                <TextInput source="workingDir" defaultValue={workingDir} validate={required()} />
                <TextInput source="functionName" defaultValue={functionName} validate={required()} />
                <TextInput source="seeds" multiline validate={required()} maxRows={10} />
                <TextInput source="description" />
            </SimpleForm>
        </Create>
    );
};
