import { SubmissionList } from "./SubmissionList";
import { SubmissionCreate } from "./SubmissionCreate";
import { SubmissionEdit } from "./SubmissionEdit";
import { SubmissionShow } from "./SubmissionShow";
import UploadFileIcon from "@mui/icons-material/UploadFile";

export default {
    name: "submissions",
    list: SubmissionList,
    create: SubmissionCreate,
    edit: SubmissionEdit,
    show: SubmissionShow,
    icon: UploadFileIcon,
};
