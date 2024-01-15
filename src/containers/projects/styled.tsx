import { Box, BoxProps, Container, ContainerProps, styled } from "@mui/material";
import { MotionProps } from "framer-motion";

type ProjectContainerProps = {
    children?: React.ReactNode;
} & Omit<MotionProps, keyof ContainerProps> & ContainerProps;

type ProjectBoxProps = BoxProps & Omit<MotionProps, keyof BoxProps>;

export const ProjectsContainer: React.FC<ProjectContainerProps> = styled(Container)(
    ({ theme }) => ({
        margin: "var(--sectionMargin) 0",
        padding: 0,
        [theme.breakpoints.up(150)]: {
            margin: "calc(1.5 * var(--sectionMargin)) 0",
        },
        [theme.breakpoints.up("miniTablet")]: {
            margin: "calc(2 * var(--sectionMargin)) 0",
        },
    })
)

export const ProjectBox: React.FC<ProjectBoxProps> = styled(Box)(
    ({ theme }) => ({
        padding: theme.spacing(6),
        display: "flex",
        gap: "var(--flexGap)",
        background: "#262525",
        [theme.breakpoints.down(120)]: {
            padding: "0 !important",
        },
        [theme.breakpoints.down("tablet")]: {
            flexDirection: "column",
            padding: theme.spacing(3),
        },
        "&:hover": {
            background: "#FE7562"
        },
        "& .card": {
            flex: "1 1 40%",
            width: "100%",
            background: "transparent",
            boxShadow: "none",
        },
        "& svg": {
            flex: "1 1 60%",
            width: "100%",
            objectFit: "cover",
            height: "auto",
        }
    })
)