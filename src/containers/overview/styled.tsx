import { Box, styled } from "@mui/material";

export const OverviewBox = styled(Box)(
    ({ theme }) => ({
        padding: "calc( 3 * var(--cardPadding)) 0",
        "& .mediaBox": {
            margin: "var(--sectionMargin) 0",
            padding: "var(--cardPadding)",
            borderRadius: "20px",
            border: "1.5px solid #FFF",
            background: "#F6CDCE",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            filter: "blur(1px)",
            backdropFilter: "blur(13.5px)",
            [theme.breakpoints.up("tablet")]: {
                margin: "var(--sectionMargin) 0 calc(1.5 * var(--sectionMargin))"
            }
        },
        "& .media": {
            display: "flex",
            gap: "1rem",
            padding: "var(--cardPadding)",
            background: "radial-gradient(385.89% 262.44% at 50.11% 146.79%, #E9748B 32.38%, #D772AD 82.86%)",
            borderRadius: "20px",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.36)",
            backdropFilter: "blur(13.5px)",
        },
        "& .media svg": {
            flex: "1 1 50%",
            height: "auto",
        },
        "& ul": {
            listStyleType: "none",
            paddingInlineStart: 0,
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(2),
        },
        "& a": {
            fontFamily: "Poppins",
            fontWeight: 500,
            fontSize: "20px",
            lineHeight: 1.4,
            color: "#000000",
            textDecoration: "underline",
            overflow: "hidden",
            textOverflow: "ellipsis",
            [theme.breakpoints.down("laptop")]: {
                fontSize: "16px"
            }
        },
        [theme.breakpoints.down("laptop")]: {
            padding: "calc(1.5 * var(--cardPadding)) 0"
        },
        [theme.breakpoints.down(180)]: {
            "& .mediaBox, & .media": {
                padding: "20%"
            }
        }
    })
)