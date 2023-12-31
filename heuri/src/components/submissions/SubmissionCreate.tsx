import { v4 as uuidv4 } from "uuid";

import {
    Create,
    SimpleForm,
    TextInput,

} from "react-admin";

export const SubmissionCreate = () => {
    // const transform = (data: any) => data;
    const transform = (data: any) => ({
        ...data,
        id: uuidv4(),
        createdAt: new Date(),
        updatedAt: new Date(),
    });

    return (
        <Create redirect="list" transform={transform}>
            <SimpleForm>
                <TextInput source="contestId" />
                <TextInput source="func" />
                <TextInput source="description" />
            </SimpleForm>
        </Create>
    );
};
