import { Card, CardActions, CardHeader, Typography } from "@mui/material";
import { ProjectType } from "../../types/app.type";
import { ProjectBox } from "./styled";
import { BaseButton } from "../../components/button";
import { useNavigate } from "react-router-dom";

export const Project: React.FC<ProjectType> = ({ media, title, url }) => {
    const navigate = useNavigate();
    return (
        <ProjectBox>
            {media}
            <Card
                className="card"
            >
                <CardHeader
                    title={
                        <Typography
                            variant="h3"
                            whiteSpace={"normal"}
                            fontFamily={"Poppins"}
                            fontWeight={700}
                            fontSize={{ mobile: 16, laptop: 24 }}
                            lineHeight={1.4}
                            color={"#FFF"}
                        >
                            {title}
                        </Typography>
                    }
                    sx={{ padding: { mobile: "1rem 0", laptop: "1rem" } }}
                />
                <CardActions
                    sx={{ padding: { mobile: "1rem 0", laptop: "1rem" } }}
                >
                    <BaseButton
                        variant="outlined"
                        onClick={() => navigate(`/projects/${url}`)}
                        sx={{
                            border: "1px solid #FFF",
                            borderRadius: "31px",
                            color: "#FFFFFF",
                            "&:hover": {
                                border: "1px solid #FFF",
                                color: "#FFFFFF",
                            }
                        }}
                    >
                        <Typography variant="button">
                            read more
                        </Typography>
                    </BaseButton>
                </CardActions>
            </Card>
        </ProjectBox>
    )
}