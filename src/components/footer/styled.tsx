import { styled } from "@mui/material";
import { Box } from "@mui/system";

export const FooterBox = styled(Box)`
    ${({ theme }) => ({
        padding: "var(--cardPadding) 0",
        "& img": {
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
        },
        [theme.breakpoints.down("miniTablet")]: {
            transform: "translateY(50%)",
            "& img": {
                width: "50%"
            }
        },
        [theme.breakpoints.down(260)]: {
            transform: "translateY(80%)"
        },
        [theme.breakpoints.down(181)]: {
            transform: "translateY(100%)"
        },
    })}
`