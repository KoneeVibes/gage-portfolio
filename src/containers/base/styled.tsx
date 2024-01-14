import { Container, styled } from "@mui/material";

export const BaseContainer = styled(Container)`
    ${() => ({
        padding: "var(--cardPadding) var(--pagePadding)",
        "& #footer": {
            transform: "none",
        },
        "& .Projects": {
            color: "#EF7580"
        }
    })}
`