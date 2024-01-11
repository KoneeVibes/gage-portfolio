import { Container } from "@mui/material";
import { Navbar } from "../../components/navigation";
import { Header } from "../../components/header";
import { About } from "../../components/about";

export const Home: React.FC<{}> = () => {
    return (
        <Container
            sx={{
                padding: "var(--cardPadding) var(--pagePadding)"
            }}
        >
            <Navbar />
            <Header />
            <About />
        </Container>
    )
}