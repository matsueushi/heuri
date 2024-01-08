import { Identifier, TopToolbar, CreateButton, ExportButton } from "react-admin";

interface FilteredListActionsProps {
    id?: Identifier,
}

export const FilteredListActions = ({ id }: FilteredListActionsProps) => {
    return <TopToolbar>
        <CreateButton to={`/submissions/create?contestId=${id}`} />
        <ExportButton />
    </TopToolbar>;
};
