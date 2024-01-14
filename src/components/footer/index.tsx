import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { SMIcons } from "../../config";
import { FooterBox } from "./styled";
import logo from "../../assets/logo.svg";

export const Footer: React.FC<{ footerRef?: React.MutableRefObject<HTMLElement | null> }> = ({ footerRef }) => {
    return (
        <FooterBox
            id="footer"
            ref={footerRef}
            component={"div"}
        >
            <img src={logo} alt="logo" loading="lazy" />
            <Box
                padding={"var(--cardPadding) 0"}
            >
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