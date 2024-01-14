import { Box, Stack, Typography } from "@mui/material"
import { FullStar, HalfStar } from "../../assets"

export const Review: React.FC<{}> = () => {
    return (
        <Box>
            <Stack
                direction={"row"}
                flexWrap={"wrap"}
            >
                {[...Array(4)].map((item, i) => {
                    return (
                        <FullStar key={i} />
                    )
                })}
                <HalfStar />
            </Stack>
            <Typography
                fontFamily={"Poppins"}
                fontWeight={500}
                fontSize={{ mobile: "14px", laptop: "18px", desktop: "22px" }}
                lineHeight={1.4}
                whiteSpace={"normal"}
            >
                4.8/5 -From 600 reviews
            </Typography>
        </Box>
    )
}