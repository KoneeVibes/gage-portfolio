import { useParams } from "react-router-dom";
import { ProjectOverview } from "../../containers/overview";
import { projectdetails } from "../../config";
import { BasePage } from "../../containers/base";

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
            <BasePage />
        );
    }
    return (
        <BasePage
            body={
                <ProjectOverview
                    title={projectDetail.title}
                    media1={projectDetail.media1}
                    media2={projectDetail.media2}
                    media3={projectDetail.media3}
                    media4={projectDetail.media4}
                    body={projectDetail.body}
                    links={projectDetail.links}
                />
            }
        />
    )
}