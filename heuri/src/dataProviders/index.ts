import pluralize from "pluralize";
import camelCase from "camelcase";

import { DataProvider, GetListParams, GetOneParams } from "@refinedev/core";

import * as queries from "../graphql/queries";
import * as mutations from "../graphql/mutations";

import { V6Client } from "@aws-amplify/api-graphql";

export const amplifyDataProvider = (client: V6Client): DataProvider => {
    const getList = async ({ resource, meta }: GetListParams) => {
        console.log("getList", resource, meta);

        const opName = camelCase(`list-${resource}`);
        const query = (queries as any)[opName];
        if (query) {
            const response = await client.graphql({ query });
            console.log(response);

            const data = response.data[opName].items;
            if (data) {
                return {
                    data,
                    total: data.length,
                };
            } else {
                throw new Error(`Resource ${resource} not found`);
            }
        } else {
            throw new Error(`Query ${opName} not found`);
        }
    };

    const getOne = async ({ resource, id, meta }: GetOneParams) => {
        console.log("getOne", resource, id, meta);

        const singularResource = pluralize.singular(resource);
        const opName = camelCase(`get-${singularResource}`);
        const query = (queries as any)[opName];
        if (query) {
            const response = await client.graphql({
                query,
                variables: { id: id },
            });
            console.log(response);

            if (response) {
                return {
                    data: response.data[opName],
                };
            } else {
                throw new Error(`Resource ${resource} with id ${id} not found`);
            }
        } else {
            throw new Error(`Query ${opName} not found`);
        }
    };

    const create = async ({ resource, variables }) => {
        console.log("create", resource, variables);

        const singularResource = pluralize.singular(resource);
        const opName = camelCase(`create-${singularResource}`);
        const query = (mutations as any)[opName];
        if (query) {
            const response = await client.graphql({
                query,
                variables: { input: variables },
            });

            if (response) {
                return {
                    data: response.data[opName],
                };
            } else {
                throw new Error(`Failed to create resource ${resource} with ${variables}`);
            }
        } else {
            throw new Error(`Query ${opName} not found`);
        }
    };

    const update = async ({ resource, id, variables }) => {
        console.log("update", resource, id, variables);

        const singularResource = pluralize.singular(resource);
        const opName = camelCase(`update-${singularResource}`);
        const query = (mutations as any)[opName];
        if (query) {
            const response = await client.graphql({
                query,
                variables: {
                    input: variables,
                },
            });
            console.log(response);

            if (response) {
                return {
                    data: response.data[opName],
                };
            } else {
                throw new Error(`Failed to create resource ${resource} with ${variables}`);
            }
        } else {
            throw new Error(`Query ${opName} not found`);
        }
    };

    const deleteOne = async ({ resource, id }) => {
        console.log("deleteOne", resource, id);

        const singularResource = pluralize.singular(resource);
        const opName = camelCase(`delete-${singularResource}`);
        const query = (mutations as any)[opName];
        if (query) {
            const response = await client.graphql({
                query,
                variables: {
                    id: id,
                },
            });
            console.log(response);

            if (response) {
                return {
                    data: response.data[opName],
                };
            } else {
                throw new Error(`Failed to delete resource ${resource} with id ${id}`);
            }
        } else {
            throw new Error(`Query ${opName} not found`);
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
