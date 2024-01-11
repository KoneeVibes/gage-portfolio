import { Stack, styled } from "@mui/material";

export const AboutStack = styled(Stack)(
    ({ theme }) => ({
        [theme.breakpoints.up("mobile")]: {
            flexDirection: "column-reverse",
            gap: theme.spacing(3),
        },
        [theme.breakpoints.up("tablet")]: {
            gap: theme.spacing(6),
        },
        [theme.breakpoints.up("laptop")]: {
            flexDirection: "row",
            padding: "var(--cardPadding) 0",
        }
    })
)