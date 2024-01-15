import { Box, BoxProps, styled } from "@mui/material";
import { MotionProps } from "framer-motion";

type PictureBoxProps = BoxProps & Omit<MotionProps, keyof BoxProps>

export const PictureBox: React.FC<PictureBoxProps> = styled(Box)(
    ({ theme }) => ({
        [theme.breakpoints.up("mobile")]: {
            margin: "var(--sectionMargin) 0",
            "& .card": {
                boxShadow: "none",
                position: "absolute",
                left: "50%",
                transform: "translate(-50%, 5%)",
                top: "50%",
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
        },
        [theme.breakpoints.up("tablet")]: {
            "& .card": {
                transform: "translate(30%, -50%)",
            }
        },
        [theme.breakpoints.down("laptop")]: {
            "& .card": {
                padding: "0"
            }
        }
    })
)