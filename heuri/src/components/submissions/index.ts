import { SubmissionList } from "./SubmissionList";
import { SubmissionCreate } from "./SubmissionCreate";
import { SubmissionEdit } from "./SubmissionEdit";
import { SubmissionShow } from "./SubmissionShow";

export default {
    name: "submissions",
    list: SubmissionList,
    create: SubmissionCreate,
    edit: SubmissionEdit,
    show: SubmissionShow,
};
