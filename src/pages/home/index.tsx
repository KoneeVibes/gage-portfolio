import { useRef } from "react";
import { Container } from "@mui/material";
import { Navbar } from "../../components/navigation";
import { Header } from "../../components/header";
import { About } from "../../components/about";
import { Projects } from "../../components/projects";
import { Picture } from "../../components/picturebox";
import { Footer } from "../../components/footer";

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
