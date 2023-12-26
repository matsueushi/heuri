import {
    useShow,
    useResource,
    useNavigation,
} from "@refinedev/core";

export const ShowContest = (): JSX.Element => {
    const { edit, list } = useNavigation();
    const { id } = useResource();
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;

    const record = data?.data;

    return (
        <div style={{ padding: "16px" }}>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <h1>Contest Show</h1>
                <div style={{ display: "flex", gap: "8px" }}>
                    <button onClick={() => list("contests")}>
                        Contests
                    </button>
                    <button onClick={() => edit("contests", id ?? "")}>
                        Edit
                    </button>
                </div>
            </div>
            <div>
                <div style={{ marginTop: "6px" }}>
                    <h5>Id</h5>
                    <div>{record?.id ?? ""}</div>
                </div>
                <div style={{ marginTop: "6px" }}>
                    <h5>Name</h5>
                    <div>{record?.name}</div>
                </div>
                <div style={{ marginTop: "6px" }}>
                    <h5>Description</h5>
                    <p>{record?.description}</p>
                </div>
                <div style={{ marginTop: "6px" }}>
                    <h5>Created At</h5>
                    <div>
                        {new Date(record?.createdAt).toLocaleString(undefined, {
                            timeZone: "UTC",
                        })}
                    </div>
                </div>
                <div style={{ marginTop: "6px" }}>
                    <h5>Updated At</h5>
                    <div>
                        {new Date(record?.updatedAt).toLocaleString(undefined, {
                            timeZone: "UTC",
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
