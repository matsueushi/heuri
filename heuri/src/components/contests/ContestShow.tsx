import { DateField, Labeled, Show, SimpleShowLayout, TextField, UrlField } from "react-admin";
import { SubmissionFilteredList } from "../submissions/SubmissionFilteredList";

export const ContestShow = () => {
    return <>
        <Show >
            <SimpleShowLayout>
                <TextField source="id" />
                <TextField source="name" />
                <UrlField source="input" />
                <TextField source="description" />
                <DateField source="createdAt" showTime />
                <DateField source="updatedAt" showTime />
            </SimpleShowLayout>
        </Show >
        <Show actions={<></>} title=" ">
            <SimpleShowLayout>
                <Labeled source="submissions">
                    <SubmissionFilteredList />
                </Labeled>
            </SimpleShowLayout>
        </Show >
    </>;
};
