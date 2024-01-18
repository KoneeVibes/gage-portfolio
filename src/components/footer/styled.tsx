import { styled, Box, BoxProps } from "@mui/material";
import { MotionProps } from "framer-motion";

type FooterProps = BoxProps & Omit<MotionProps, keyof BoxProps>

export const FooterBox: React.FC<FooterProps> = styled(Box)`
    ${({ theme }) => ({
        padding: "var(--cardPadding) 0",
        "& img": {
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
        },
        [theme.breakpoints.down("miniTablet")]: {
            transform: "translateY(30%) !important",
            "& img": {
                width: "50%"
            }
        },
        [theme.breakpoints.down(293)]: {
            transform: "translateY(50%) !important"
        },
        [theme.breakpoints.down(240)]: {
            transform: "translateY(75%) !important"
        },
        [theme.breakpoints.down(164)]: {
            transform: "translateY(100%) !important"
        },
    })}
`