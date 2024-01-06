import { ContestList } from "./ContestList";
import { ContestCreate } from "./ContestCreate";
import { ContestEdit } from "./ContestEdit";
import { ContestShow } from "./ContestShow";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

export default {
    name: "contests",
    list: ContestList,
    create: ContestCreate,
    edit: ContestEdit,
    show: ContestShow,
    icon: EmojiEventsIcon,
};
