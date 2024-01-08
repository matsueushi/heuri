import { Identifier, TopToolbar, ShowButton } from "react-admin";
import { SetAsBestButton } from "./SetAsBestButton";

interface CompareWithActionsProps {
    id?: Identifier,
}

export const CompareWithActions = ({ id }: CompareWithActionsProps) => (
    <TopToolbar>
        <SetAsBestButton id={id} />
        <ShowButton />
    </TopToolbar>
);
