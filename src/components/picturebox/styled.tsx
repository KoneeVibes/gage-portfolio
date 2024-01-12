import { Box, styled } from "@mui/material";

export const PictureBox = styled(Box)(
    ({ theme }) => ({
        [theme.breakpoints.up("mobile")]: {
            margin: "var(--sectionMargin) 0",
            "& .card": {
                boxShadow: "none",
                position: "absolute",
                left: "50%",
                transform: "translate(-50%)",
                top: "70%",
                width: "50%",
                borderRadius: "0",
                padding: "var(--cardPadding)"
            }
        },
        [theme.breakpoints.up(150)]: {
            margin: "calc(1.5 * var(--sectionMargin)) 0",
        },
        [theme.breakpoints.up("miniTablet")]: {
            margin: "calc(2 * var(--sectionMargin)) 0",
            "& .card": {
                left: "auto",
                transform: "none",
                right: "-25%",
                top: "30%",
            }
        },
    })
)