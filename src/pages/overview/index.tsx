import { Container } from "@mui/material";
import { Navbar } from "../../components/navigation";
import { Footer } from "../../components/footer";
import { useParams } from "react-router-dom";
import { ProjectOverview } from "../../components/overview";
import { projectdetails } from "../../config";

export const Overview: React.FC<{}> = () => {
    const { project } = useParams();
    const projectDetail = projectdetails.find((detail) => {
        return (
            detail.title
                .split(" ")
                .join("")
                .toLowerCase() === project
        )
    });
    if (!projectDetail) {
        return (
            <Container>
                <p>Project not found</p>
            </Container>
        );
    }
    return (
        <Container
            sx={{
                padding: "var(--cardPadding) var(--pagePadding)",
                "& #footer": {
                    transform: "none",
                }
            }}
        >
            <Navbar />
            <ProjectOverview
                title={projectDetail.title}
                media1={projectDetail.media1}
                media2={projectDetail.media2}
                media3={projectDetail.media3}
                body={projectDetail.body}
            />
            <Footer />
        </Container>
    )
}