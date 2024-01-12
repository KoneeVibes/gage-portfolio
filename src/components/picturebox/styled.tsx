import { Box, styled } from "@mui/material";

export const PictureBox = styled(Box)(
    ({ theme }) => ({
        [theme.breakpoints.up("mobile")]: {
            margin: "var(--sectionMargin) 0",
        },
        [theme.breakpoints.up(150)]: {
            marginTop: "calc(1.5 * var(--sectionMargin))",
        },
        [theme.breakpoints.up("miniTablet")]: {
            margin: "calc(2 * var(--sectionMargin)) 0",
        },
        "& svg": {
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "100%"
        }
    })
)