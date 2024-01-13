import { styled } from "@mui/material";
import { Box } from "@mui/system";

export const FooterBox: React.FC<{ children: React.ReactNode }> = styled(Box)`
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
                width: "100%"
            }
        },
        [theme.breakpoints.down(240)]: {
            transform: "translateY(80%)"
        },
        [theme.breakpoints.down(181)]: {
            transform: "translateY(100%)"
        },
    })}
`