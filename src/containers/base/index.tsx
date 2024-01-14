import { Box, Typography } from "@mui/material"
import { Navbar } from "../../components/navigation"
import { Footer } from "../../components/footer"
import { BaseContainer } from "./styled"

export const BasePage: React.FC<{ body?: React.ReactNode }> = ({ body }) => {
    const fallback = <Box sx={{ height: 400 }}>
        <Typography
            whiteSpace={"normal"}
            fontFamily={"Montserrat"}
            fontWeight={400}
            fontSize={{ mobile: 18, miniTablet: 22 }}
            lineHeight={1.4}
            padding={"calc(1.5 * var(--cardPadding)) 0"}
        >
            Project not found
        </Typography>
    </Box>
    return (
        <BaseContainer>
            <Navbar />
            {body ? body : fallback}
            <Footer />
        </BaseContainer>
    )
}