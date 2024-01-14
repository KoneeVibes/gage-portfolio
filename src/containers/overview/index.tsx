import { Box, Stack, Typography } from "@mui/material"
import { OverviewBox } from "./styled"

export const ProjectOverview: React.FC<
    {
        title: string,
        media1: React.ReactNode,
        media2?: React.ReactNode,
        media3?: React.ReactNode,
        body: string
    }
> = ({ title, media1, media2, media3, body }) => {
    return (
        <OverviewBox>
            <Typography
                whiteSpace={"normal"}
                fontFamily={"Poppins"}
                fontWeight={700}
                fontSize={{ mobile: 18, miniTablet: 24, laptop: 35 }}
                lineHeight={1.5}
                sx={{
                    backgroundImage: "linear-gradient(94deg, #B16CEA -14.75%, #FF755F 53.12%)",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
            >
                {title}
            </Typography>
            <Box
                className="mediaBox"
                component={"div"}
            >
                <Stack
                    direction={"row"}
                    className="media"
                >
                    {media1}
                    {media2}
                    {media3}
                </Stack>
            </Box>
            <Typography
                whiteSpace={"normal"}
                fontFamily={"Montserrat"}
                fontWeight={400}
                fontSize={{ mobile: 14, miniTablet: 16, tablet: 22 }}
                lineHeight={1.4}
            >
                {body}
            </Typography>
        </OverviewBox>
    )
}