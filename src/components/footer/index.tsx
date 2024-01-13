import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { SMIcons } from "../../config";
import { FooterBox } from "./styled";
import logo from "../../assets/logo.svg";

export const Footer: React.FC<{}> = () => {
    return (
        <FooterBox>
            <img src={logo} alt="logo" />
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
                    sx={{
                        backgroundImage: "linear-gradient(98deg, #B16CEA 3.69%, #FF6964 29.62%, #FEA44C 56.88%)",
                        backgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        color: "transparent",
                    }}
                >
                    Copyright@Gage Hakim 2024. All Rights Reserved.
                </Typography>
            </Box>
        </FooterBox>
    )
}