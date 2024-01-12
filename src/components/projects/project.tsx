import { Card, CardActions, CardHeader, Typography } from "@mui/material"
import { ProjectType } from "../../types/app.type"
import { ProjectBox } from "./styled"
import { BaseButton } from "../button"

export const Project: React.FC<ProjectType> = ({ bgColor, media, title, url }) => {
    return (
        <ProjectBox
            sx={{
                background: bgColor
            }}
        >
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
                />
                <CardActions>
                    <BaseButton
                        variant="outlined"
                        onClick={() => console.log(url)}
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