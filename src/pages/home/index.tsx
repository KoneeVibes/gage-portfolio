import { useRef } from "react";
import { Container } from "@mui/material";
import { Navbar } from "../../components/navigation";
import { Header } from "../../containers/header";
import { About } from "../../containers/about";
import { Projects } from "../../containers/projects";
import { Picture } from "../../components/picturebox";
import { Footer } from "../../containers/footer";

export const Home: React.FC<{}> = () => {
    const projectsRef = useRef(null);
    const footerRef = useRef(null);
    return (
        <Container
            sx={{
                padding: "var(--cardPadding) var(--pagePadding)"
            }}
        >
            <Navbar
                footerRef={footerRef}
            />
            <Header
                projectsRef={projectsRef}
                footerRef={footerRef}
            />
            <About />
            <Projects
                projectsRef={projectsRef}
            />
            <Picture />
            <Footer
                footerRef={footerRef}
            />
        </Container>
    )
}
