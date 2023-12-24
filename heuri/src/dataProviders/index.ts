import { DataProvider } from "@refinedev/core";

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

export const mockDataProvider: DataProvider = {
    getList: async <TData>({ resource }) => {
        return {
            data: posts as TData[],
            total: posts.length,
        };
    },

    getOne: async <TData>({ resource, id }) => {
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
