import { Stack, StackProps, styled } from "@mui/material";
import { MotionProps } from "framer-motion";

type HeroProps = {
    children: React.ReactNode
} & StackProps & Omit<MotionProps, keyof StackProps>

export const Hero: React.FC<HeroProps> = styled(Stack)(
    ({ theme }) => ({
        [theme.breakpoints.up("mobile")]: {
            flexDirection: "column",
            gap: theme.spacing(6),
            margin: "var(--sectionMargin) 0",
            alignItems: "center"
        },
        [theme.breakpoints.up(150)]: {
            marginTop: "calc(1.5 * var(--sectionMargin))",
        },
        [theme.breakpoints.up("miniTablet")]: {
            margin: "calc(2 * var(--sectionMargin)) 0",
        },
        [theme.breakpoints.up("laptop")]: {
            flexDirection: "row",
            gap: theme.spacing(12),
            alignItems: "stretch"
        }
    })
)