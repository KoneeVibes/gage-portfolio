import { Box, Card, CardContent, CardHeader, Stack, Typography } from "@mui/material";
import { PictureBox } from "./styled";
import { SMIcons } from "../../config";
import React from "react";
import gage from "../../assets/gagePhoto.svg";
import { motion } from "framer-motion";

export const Picture: React.FC<{}> = () => {
    return (
        <PictureBox
            component={motion.div}
            initial={{ opacity: 0, transform: "translate(0, 10vh)" }}
            whileInView={{ opacity: 1, transform: "translate(0, 0)" }}
        >
            <Box
                sx={{
                    backgroundImage: `url(${gage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top",
                    backgroundSize: "cover",
                    minHeight: { mobile: 167, miniTablet: 350, desktop: 677 },
                    width: { mobile: "75%", tablet: "50%" },
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
                                fontSize={{ mobile: "8px", miniTablet: "16px", tablet: "24px" }}
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
                            fontSize={{mobile: 6, miniTablet: 8, tablet: 12}}
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