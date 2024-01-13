import { Stack, Typography } from "@mui/material";
import { ProjectsContainer } from "./styled";
import { projects } from "../../config";
import { Project } from "./project";

export const Projects: React.FC<{ projectsRef: React.RefObject<HTMLDivElement> }> = ({ projectsRef }) => {
    return (
        <ProjectsContainer
            id="projects"
            ref={projectsRef}
        >
            <Typography
                variant="h2"
                whiteSpace={"normal"}
                fontFamily={"Poppins"}
                fontWeight={700}
                lineHeight={1.1}
                fontSize={{ mobile: "24px", miniTablet: "35px", tablet: "48px", desktop: "70px" }}
                sx={{
                    backgroundImage: "linear-gradient(98deg, #B16CEA 3.69%, #FF6964 29.62%, #FEA44C 56.88%)",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                    width: { laptop: "50%" },
                    padding: { tablet: "var(--cardPadding) 0" }
                }}
            >
                Look at my projects.
            </Typography>
            <Stack
                spacing={{ mobile: 5, miniTablet: 10 }}
                padding={"var(--cardPadding) 0"}
            >
                {projects.map((project, k) => {
                    return (
                        <Project
                            key={k}
                            bgColor={project.bgColor}
                            media={project.media}
                            title={project.title}
                            url={project.actionUrl}
                        />
                    )
                })}
            </Stack>
        </ProjectsContainer >
    )
}