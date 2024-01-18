import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { OverviewBox } from "./styled";
import { Link } from "react-router-dom";

export const ProjectOverview: React.FC<
    {
        title: string,
        media1: React.ReactNode,
        media2?: React.ReactNode,
        media3?: React.ReactNode,
        media4?: React.ReactNode,
        body: string,
        links?: Record<any, any>[]
    }
> = ({ title, media1, media2, media3, media4, body, links }) => {
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
            {media4 ?
                <Box
                    className="mediaBox"
                    component={"div"}
                >
                    <Stack
                        direction={"row"}
                        className="media"
                    >
                        {media4}
                    </Stack>
                </Box>
                :
                null
            }
            <Typography
                whiteSpace={"normal"}
                fontFamily={"Montserrat"}
                fontWeight={400}
                fontSize={{ mobile: 14, miniTablet: 16, tablet: 22 }}
                lineHeight={1.4}
            >
                {body}
            </Typography>
            <ul>
                {links?.map((link, k) => (
                    link.sectionTitle ?
                        (
                            <React.Fragment>
                                <Typography
                                    fontFamily={"Poppins"}
                                    fontWeight={500}
                                    fontSize={{ mobile: "16px", laptop: "20px" }}
                                    lineHeight={1.4}
                                    color={"#000000"}
                                    sx={{
                                        textDecoration: "underline"
                                    }}
                                >
                                    {link.sectionTitle}
                                </Typography>
                                {
                                    link.sections.map((section: { date: string, href: string }, k: any) => {
                                        return (
                                            <li key={k}>
                                                <Link to={section.href} target="_blank">
                                                    {section.date}
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </React.Fragment>
                        )
                        : (
                            <li key={k}>
                                <Link to={link.href} target="_blank">
                                    {link.text}
                                </Link>
                            </li>
                        )
                ))}
            </ul >
        </OverviewBox >
    )
}