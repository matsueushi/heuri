import pluralize from "pluralize";
import camelCase from "camelcase";

import { DataProvider, GetListParams, GetOneParams } from "@refinedev/core";

import { V6Client } from "@aws-amplify/api-graphql";

import * as queries from "../graphql/queries";
import * as mutations from "../graphql/mutations";


export const posts = [
    {
        id: "1",
        title: "dalgja;",
        category: {
            "id": 10,
        },
        content: "abc",
        status: "published",
        createdAt: "2022-01-24T15:49:21.411Z",
    },
];

export const amplifyDataProvider = (client: V6Client): DataProvider => {
    return {
        getList: async <TData>({ resource, meta }: GetListParams) => {
            const operationName = camelCase(`list-${resource}`);


            const query = (queries as any)[operationName];

            if (query) {
                const response = await client.graphql({ query });

                console.log(response);
                // console.log(response.data);
            }

            return {
                data: posts as TData[],
                total: posts.length,
            };
        },

        getOne: async <TData>({ resource, id }: GetOneParams) => {
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
        },

        create: async <TData>({ resource, variables }) => {
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
