import { Box, styled } from "@mui/material";

export const OverviewBox = styled(Box)(
    ({ theme }) => ({
        padding: "calc( 3 * var(--cardPadding)) 0",
        "& .media svg": {
            flex: "1 1 50%",
            height: "auto",
        },
        [theme.breakpoints.down("laptop")]: {
            padding: "calc(1.5 * var(--cardPadding)) 0"
        }
    })
)