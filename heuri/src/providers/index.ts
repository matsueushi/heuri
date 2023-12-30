export * from "./FakeDataProvider";

import {
    DataProvider as DataProviderInterface,
} from "ra-core";
import { DataProvider, DataProviderOptions, Operations } from "./DataProvider";

export function buildDataProvider(
    operations: Operations,
    options?: DataProviderOptions
): DataProviderInterface {
    const dataProvider = new DataProvider(operations, options);

    return {
        getList: dataProvider.getList,
        getOne: dataProvider.getOne,
        getMany: dataProvider.getMany,
        getManyReference: dataProvider.getManyReference,
        create: dataProvider.create,
        update: dataProvider.update,
        updateMany: dataProvider.updateMany,
        delete: dataProvider.delete,
        deleteMany: dataProvider.deleteMany,
    };
}
