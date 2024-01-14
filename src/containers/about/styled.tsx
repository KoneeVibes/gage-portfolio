import { Stack, styled } from "@mui/material";

export const AboutStack = styled(Stack)(
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