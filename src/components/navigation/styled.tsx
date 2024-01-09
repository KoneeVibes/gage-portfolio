import { styled } from "@mui/material";

export const Nav = styled("div")(
    ({ theme }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: theme.spacing(4),
        "& ul": {
            display: "flex",
            gap: theme.spacing(20),
            listStyleType: "none",
            paddingInlineStart: 0,
        },
        "& a": {
            fontFamily: "Poppins",
            fontWeight: 500,
            fontSize: "25px",
            lineHeight: 1.4,
            color: "#000000",
            textDecoration: "none",
        }
    }),
)