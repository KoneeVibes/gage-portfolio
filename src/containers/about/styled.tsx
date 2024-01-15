import { Stack, StackProps, styled } from "@mui/material";
import { MotionProps } from "framer-motion";

type AboutStackProps = StackProps & Omit<MotionProps, keyof StackProps>;

export const AboutStack: React.FC<AboutStackProps> = styled(Stack)(
    ({ theme }) => ({
        [theme.breakpoints.up("mobile")]: {
            flexDirection: "column",
            gap: theme.spacing(3),
            margin: "0 calc(-1 * var(--pagePadding))",
            padding: "calc(2 * var(--pagePadding)) var(--pagePadding) var(--pagePadding)",
            background: "#FFFFFF",
        },
        [theme.breakpoints.up("tablet")]: {
            gap: theme.spacing(6),
        },
        [theme.breakpoints.up("laptop")]: {
            flexDirection: "row",
            padding: "var(--cardPadding) 0",
            margin: "0",
            background: "unset",
        }
    })
)