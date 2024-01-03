import { ContestList } from "./ContestList";
import { ContestCreate } from "./ContestCreate";
import { ContestEdit } from "./ContestEdit";
import { ContestShow } from "./ContestShow";

export default {
    name: "contests",
    // recordRepresentation: (record: any) => (`${record.name}, #${record.id}`),
    list: ContestList,
    create: ContestCreate,
    edit: ContestEdit,
    show: ContestShow,
};
