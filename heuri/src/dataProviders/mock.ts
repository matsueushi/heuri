import {
    CreateParams,
    DataProvider,
    DeleteOneParams,
    GetListParams,
    GetOneParams,
    UpdateParams,
} from "@refinedev/core";
import { Contest } from "../API";


const contests: Contest[] = [
    {
        __typename: "Contest",
        id: "5006034e-96f4-4ddf-b3b8-f220531537fd",
        name: "ahc012",
        description: "poity",
        createdAt: "2023-12-23T10:05:21.182Z",
        updatedAt: "2023-12-24T14:27:46.223Z",
        owner: "782ffa1d-b2a4-48fb-8ef1-306efa304f20",
    },
    {
        __typename: "Contest",
        id: "f68ea95b-855d-49ac-95ca-6b382268e078",
        name: "afseawaweeeawawasgg",
        description: "xxrsewaaeax",
        createdAt: "2023-12-23T10:05:45.274Z",
        updatedAt: "2023-12-23T10:05:45.274Z",
        owner: "782ffa1d-b2a4-48fb-8ef1-306efa304f20",
    },
];


export const mockDataProvider = (): DataProvider => {
    const getList = async ({ resource, pagination, meta }: GetListParams) => {
        console.log("getList", resource, pagination, meta);

        return {
            data: contests,
            total: contests.length,
        };
    };

    const getOne = async ({ resource, id, meta }: GetOneParams) => {
        console.log("getOne", resource, id, meta);

        const contest = contests.find((x) => x.id === id);
        if (contest) {
            return {
                data: contest,
            };
        } else {
            throw new Error(`Failed to find resource ${resource} with id ${id}`);
        }
    };

    const create = async ({ resource, variables }: CreateParams<Contest>) => {
        console.log("create", resource, variables);

        const newContest: Contest = {
            ...variables,
            id: String(contests.length + 1),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };
        contests.push(newContest);
        return {
            data: newContest,
        };
    };

    const update = async <TVariables>({ resource, id, variables }: UpdateParams<TVariables>) => {
        console.log("update", resource, id, variables);

        const contestIndex = contests.findIndex((x) => x.id === id);
        if (contestIndex !== -1) {
            contests[contestIndex] = {
                ...contests[contestIndex],
                ...variables,
            };
            return {
                data: contestIndex,
            };
        } else {
            throw new Error(`Failed to update resource ${resource} with id ${id}`);
        }
    };

    const deleteOne = async <TVariables>({ resource, id }: DeleteOneParams<TVariables>) => {
        console.log("deleteOne", resource, id);

        const contestIndex = contests.findIndex((x) => x.id === id);
        if (contestIndex !== -1) {
            const deletedContest = contests.splice(contestIndex, 1)[0];
            return {
                data: deletedContest,
            };
        } else {
            throw new Error(`Failed to delete resource ${resource} with id ${id}`);
        }

    };

    const getApiUrl = () => {
        throw Error("Not implemented on refine-graphql data provider.");
    };

    return {
        getList,
        getOne,
        create,
        update,
        deleteOne,
        getApiUrl,
    };
};
