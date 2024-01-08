import { Button, Identifier, useResourceContext } from "react-admin";
import StarIcon from "@mui/icons-material/Star";

interface SetAsBestButtonProps {
    id?: Identifier,
}

export const SetAsBestButton = ({ id }: SetAsBestButtonProps) => {
    const resource = useResourceContext();
    return <Button label="set as best" href={`/#/${resource}/${id}/compare`} >
        <StarIcon />
    </Button>;
};
