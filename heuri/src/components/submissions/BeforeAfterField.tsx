import Typography from "@mui/material/Typography";
import { Labeled } from "react-admin";

interface BeforeAfterFieldProps {
    source: string,
    before: number,
    after: number,
}

export const BeforeAfterField = ({ source, before, after }: BeforeAfterFieldProps) => {
    const color = after === before ? "black" : after > before ? "green" : "red";

    return <Labeled source={source}>
        <Typography variant="body2">
            {before.toLocaleString()} → {after.toLocaleString()} {" "}
            <span style={{ color }}>
                ({after > before && "+"} {(after - before).toLocaleString()})
            </span>
        </Typography>
    </Labeled>;
};
