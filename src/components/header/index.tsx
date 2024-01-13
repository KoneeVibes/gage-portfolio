import { Stack, Typography } from "@mui/material"
import { Headshot } from "../../assets"
import { BaseButton } from "../button"
import { Review } from "../review"
import { Hero } from "./styled"
import { theme } from "../../theme"

export const Header: React.FC<{}> = () => {
    return (
        <Hero>
            <Stack
                flex={"1 2 50%"}
                width={"100%"}
                overflow={"hidden"}
            >
                <Typography
                    variant="h1"
                    fontFamily={"Poppins"}
                    fontWeight={700}
                    fontSize={{ mobile: "24px", miniTablet: "28px", laptop: "35px", desktop: "48px" }}
                    lineHeight={1.4}
                    color={"#000"}
                    whiteSpace={"normal"}
                >
                    <Typography
                        component={"span"}
                        fontFamily={"inherit"}
                        fontWeight={"inherit"}
                        fontSize={"inherit"}
                        lineHeight={"inherit"}
                        whiteSpace={"inherit"}
                        sx={{
                            backgroundImage: "linear-gradient(94deg, #B16CEA -14.75%, #FF755F 53.12%)",
                            backgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            color: "transparent"
                        }}
                    >
                        Hello, I’m Gage Hakim,
                    </Typography>
                    <br /> I am a 14 year old high school student from China.
                </Typography>
                <Stack
                    spacing={2}
                    useFlexGap
                    flexWrap={"wrap"}
                    padding={"var(--cardPadding) 0"}
                    overflow={"hidden"}
                    width={{ mobile: "max-content", tablet: "auto" }}
                    sx={{
                        [theme.breakpoints.down(230)]: {
                            width: "100%"
                        },
                        [theme.breakpoints.up(440)]: {
                            flexDirection: "row"
                        }
                    }}
                >
                    <BaseButton
                        disableElevation
                        variant="contained"
                        sx={{
                            borderRadius: "31px",
                            width: { mobile: "100%", miniTablet: "auto" },
                        }}
                    >
                        <Typography variant={"button"}>
                            GET IN TOUCH
                        </Typography>
                    </BaseButton>
                    <BaseButton
                        variant="outlined"
                        sx={{
                            borderRadius: "31px",
                            color: "#000",
                            border: "1px solid #000",
                            width: { mobile: "100%", miniTablet: "auto" },
                            "&:hover": {
                                border: "1px solid #000",
                            }
                        }}
                    >
                        <Typography variant={"button"}>
                            VIEW ALL WORKS
                        </Typography>
                    </BaseButton>
                </Stack>
                <Review />
            </Stack>
            <Headshot style={{ flex: "1 1 50%", height: "auto", maxHeight: "511px", width: "100%" }} />
        </Hero>
    )
}