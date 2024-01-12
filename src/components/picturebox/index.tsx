import { Box, Card, CardContent, CardHeader, Stack, Typography } from "@mui/material";
import { PictureBox } from "./styled";
import { SMIcons } from "../../config";
import React from "react";
import gage from "../../assets/gagePhoto.svg";

export const Picture: React.FC<{}> = () => {
    return (
        <PictureBox>
            <Box
                sx={{
                    backgroundImage: `url(${gage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    minHeight: { mobile: "677px" },
                    width: { miniTablet: "70%", tablet: "50%" },
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    position: "relative",
                }}
            >
                <Card className="card">
                    <CardHeader
                        title={
                            <Typography
                                variant="h2"
                                whiteSpace={"normal"}
                                fontFamily={"Poppins"}
                                fontWeight={700}
                                lineHeight={1.1}
                                fontSize={{ mobile: "16px", miniTablet: "24px" }}
                                sx={{
                                    backgroundImage: "linear-gradient(98deg, #B16CEA 3.69%, #FF6964 29.62%, #FEA44C 56.88%)",
                                    backgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    color: "transparent",
                                }}
                            >
                                Follow me
                            </Typography>
                        }
                    />
                    <CardContent>
                        <Typography
                            variant="body1"
                            whiteSpace={"normal"}
                            fontFamily={"Poppins"}
                            fontSize={12}
                            fontWeight={400}
                            lineHeight={1.5}
                        >
                            Hello, I’m Gage Hakim, and
                            <br />I am a 14 year old high school student from China
                        </Typography>
                        <Box>
                            <hr style={{ margin: "var(--cardPadding) 0", border: "1px solid #FF7660" }} />
                            <Stack
                                direction={"row"}
                                justifyContent={"center"}
                                gap={".5rem"}
                            >
                                {SMIcons.map((icon, index) => (
                                    <React.Fragment key={index}>
                                        {icon}
                                    </React.Fragment>
                                ))}
                            </Stack>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </PictureBox>
    )
}