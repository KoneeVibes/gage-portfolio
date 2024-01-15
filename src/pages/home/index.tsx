import { useRef } from "react";
import { Box, Container } from "@mui/material";
import { Navbar } from "../../components/navigation";
import { Header } from "../../containers/header";
import { About } from "../../containers/about";
import { Projects } from "../../containers/projects";
import { Picture } from "../../containers/picturebox";
import { Footer } from "../../components/footer";
import bgImage from "../../assets/bgImage.svg";
import { motion } from "framer-motion";

export const Home: React.FC<{}> = () => {
    const projectsRef = useRef(null);
    const footerRef = useRef(null);
    return (
        <Container
            sx={{
                padding: "var(--cardPadding) var(--pagePadding)"
            }}
        >
            <Box
                component={motion.div}
                whileInView={{ opacity: 1 }}
                sx={{
                    backgroundImage: { laptop: `url(${bgImage})` },
                    backgroundSize: "contain",
                    backgroundRepeat: "repeat",
                    opacity: 0
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
            </Box>
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
