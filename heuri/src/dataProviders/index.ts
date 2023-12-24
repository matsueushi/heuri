import pluralize from "pluralize";
import camelCase from "camelcase";

import { DataProvider, GetListParams, GetOneParams } from "@refinedev/core";

import * as queries from "../graphql/queries";

import { V6Client } from "@aws-amplify/api-graphql";

export const posts = [
    {
        id: 1,
        title: "dalgja;",
        category: {
            "id": 1,
        },
        content: "abc",
        status: "published",
        createdAt: "2022-01-24T15:49:21.411Z",
    },
];

export const categories = [
    {
        id: 1,
        title: "category1",
    },
    {
        id: 2,
        title: "category2",
    }
];


export const amplifyDataProvider = (client: V6Client): DataProvider => {
    const getList = async ({ resource, meta }: GetListParams) => {
        console.log("getList", resource, meta);

        const opName = camelCase(`list-${resource}`);
        const query = (queries as any)[opName];
        const response = await client.graphql({ query });
        console.log(response);

        const data = response.data[opName].items;
        if (data) {
            return {
                data,
                total: data.length,
            };
        }

        return {
            data: [],
            total: 0,
        };
    };

    const getOne = async <TData>({ resource, id, meta }: GetOneParams) => {
        console.log("getOne", resource, id, meta);
        const singularResource = pluralize.singular(resource);
        const op = camelCase(`get-${singularResource}`);
        console.log(op);
        const post = posts.find((p) => p.id === id);
        if (post) {
            return {
                data: post as TData,
            };
        } else {
            throw new Error(`Post with id ${id} not found`);
        }
    };

    return {
        getList,
        getOne,

        create: async <TData>({ resource, variables }) => {
            console.log("create", resource, variables);
            const singularResource = pluralize.singular(resource);
            const op = camelCase(`create-${singularResource}`);
            console.log(op);
            const newPost = {
                id: String(posts.length + 1),
                ...variables,
            };
            posts.push(newPost);
            return {
                data: newPost,
            };
        },

        update: async <TData>({ resource, id, variables }) => {
            console.log("update", resource, id, variables);
            const singularResource = pluralize.singular(resource);
            const op = camelCase(`update-${singularResource}`);
            const postIndex = posts.findIndex((p) => p.id === id);
            if (postIndex !== -1) {
                posts[postIndex] = {
                    ...posts[postIndex],
                    ...variables,
                };
                return {
                    data: posts[postIndex] as TData,
                };
            } else {
                throw new Error(`Post with id ${id} not found`);
            }
        },

        deleteOne: async <TData>({ resource, id }) => {
            console.log("deleteOne", resource, id);
            const singularResource = pluralize.singular(resource);
            const op = camelCase(`delete-${singularResource}`);
            const postIndex = posts.findIndex((p) => p.id === id);
            if (postIndex !== -1) {
                const deletedPost = posts.splice(postIndex, 1)[0];
                return {
                    data: deletedPost as TData,
                };
            } else {
                throw new Error(`Post with id ${id} not found`);
            }
        },

        getApiUrl: () => {
            throw Error("Not implemented on refine-graphql data provider.");
        },
    };
};
