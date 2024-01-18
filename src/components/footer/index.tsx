import React from "react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { SMIcons } from "../../config";
import { FooterBox } from "./styled";
import logo from "../../assets/logo.svg";
import { motion } from "framer-motion";

export const Footer: React.FC<{ footerRef?: React.MutableRefObject<HTMLElement | null> }> = ({ footerRef }) => {
    return (
        <FooterBox
            id="footer"
            ref={footerRef}
            component={motion.div}
            initial={{ opacity: 0, transform: "translate(0, 10vh)" }}
            whileInView={{ opacity: 1, transform: "translate(0, 0)" }}
        >
            <img src={logo} alt="logo" loading="lazy" />
            <Box
                padding={"var(--cardPadding) 0"}
            >
                <Stack
                    direction={"row"}
                    justifyContent={"center"}
                    gap={{ mobile: ".5rem" }}
                >
                    {SMIcons.map((item, index) => (
                        <IconButton
                            key={index}
                            className="iconButton"
                            onClick={() => window.open(item.url, '_blank')}
                            sx={{
                                padding: { mobile: 0, tablet: ".5rem" },
                            }}
                        >
                            {item.icon}
                        </IconButton>
                    ))}
                </Stack>
                <hr style={{ margin: "var(--cardPadding) 0", border: "1px solid #FF7660" }} />
                <Typography
                    variant="subtitle1"
                    whiteSpace={"normal"}
                    fontFamily={"Poppins"}
                    fontWeight={400}
                    fontSize={14}
                    lineHeight={1.6}
                    textAlign={"center"}
                    color={"#FF7660"}
                >
                    Copyright@Gage Hakim 2024. All Rights Reserved.
                </Typography>
            </Box>
        </FooterBox>
    )
}