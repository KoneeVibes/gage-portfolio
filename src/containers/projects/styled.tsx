import { Box, Container, styled } from "@mui/material";

export const ProjectsContainer = styled(Container)(
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

export const ProjectBox = styled(Box)(
    ({ theme }) => ({
        padding: theme.spacing(6),
        display: "flex",
        gap: "var(--flexGap)",
        [theme.breakpoints.down(120)]: {
            padding: "0 !important",
        },
        [theme.breakpoints.down("tablet")]: {
            flexDirection: "column",
            padding: theme.spacing(3),
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