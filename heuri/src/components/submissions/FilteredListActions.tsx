import { Identifier, TopToolbar, CreateButton, ExportButton, useGetOne, Loading } from "react-admin";

interface FilteredListActionsProps {
    id?: Identifier,
}

export const FilteredListActions = ({ id }: FilteredListActionsProps) => {
    const { data, isLoading, error } = useGetOne("contests", { id });
    if (isLoading) { return <Loading />; }
    if (error) { return <p>Error: {JSON.stringify(error)}</p>; }

    return <TopToolbar>
        <CreateButton to={`/submissions/create?contestId=${id}&workingDir=${encodeURIComponent(data.workingDir)}&functionName=${data.functionName}`} />
        <ExportButton />
    </TopToolbar>;
};
