import { TopToolbar, EditButton, Button, useRecordContext, useResourceContext } from "react-admin";
import CompareIcon from "@mui/icons-material/Compare";

const CompareButton = () => {
    const resource = useResourceContext();
    const record = useRecordContext();

    return <Button label="compare" href={`/#/${resource}/${record.id}/compare`} >
        <CompareIcon />
    </Button >;
};

export const ShowActions = () => (
    <TopToolbar>
        <CompareButton />
        <EditButton />
    </TopToolbar>
);
