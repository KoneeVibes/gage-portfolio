import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Logo } from "../../assets";
import { SMIcons } from "../../config";

export const Footer: React.FC<{}> = () => {
    return (
        <Box
            padding={"var(--cardPadding) 0"}
        >
            <Logo style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} />
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
                    textAlign={"center"}
                >
                    Copyright@Gage Hakim 2024. All Rights Reserved.
                </Typography>
            </Box>
        </Box>
    )
}