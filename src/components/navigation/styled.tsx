import { styled } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../context";

export const Nav: React.FC<{ children: React.ReactNode }> = styled("div")(
    ({ theme }) => {
        const { openMenu } = useContext(Context);
        return {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: theme.spacing(12),
            [theme.breakpoints.down(280)]: {
                gap: theme.spacing(4),
            },
            [theme.breakpoints.down(200)]: {
                gap: theme.spacing(1),
            },
            "& ul": {
                display: "flex",
                gap: theme.spacing(4),
                listStyleType: "none",
                paddingInlineStart: 0,
                [theme.breakpoints.down("tablet")]: {
                    display: openMenu ? "flex" : "none",
                    position: "fixed",
                    top: "calc(46px + var(--cardPadding))",
                    left: openMenu ? "0" : "-100%",
                    flexDirection: "column",
                    gap: theme.spacing(10),
                    width: "100%",
                    height: "100%",
                    textAlign: "center",
                    transition: 0.3,
                    background: "#F8EEEE",
                    zIndex: 10,
                    padding: "var(--sectionMargin) 0"
                },
                [theme.breakpoints.down(150)]: {
                    top: "calc(25px + var(--cardPadding))",
                }
            },
            "& a": {
                fontFamily: "Poppins",
                fontWeight: 500,
                fontSize: "20px",
                lineHeight: 1.4,
                color: "#000000",
                textDecoration: "none",
                [theme.breakpoints.down("laptop")]: {
                    fontSize: "16px"
                }
            },
            "& .actionButton": {
                [theme.breakpoints.down("tablet")]: {
                    display: openMenu ? "inline-flex" : "none",
                    position: "fixed",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    bottom: "var(--pagePadding)",
                }
            },
            "& .logo": {
                [theme.breakpoints.down(150)]: {
                    display: "none",
                },
            }
        }
    },
)