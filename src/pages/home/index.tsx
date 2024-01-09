import { Container } from "@mui/material"
import { Navbar } from "../../components/navigation"

export const Home: React.FC<{}> = () => {
    return (
        <Container
            sx={{
                padding: "var(--cardPadding) var(--pagePadding)"
            }}
        >
            <Navbar />
        </Container>
    )
}