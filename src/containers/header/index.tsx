import { Stack, Typography } from "@mui/material";
import { Headshot } from "../../assets";
import { BaseButton } from "../../components/button";
import { Hero } from "./styled";
import { theme } from "../../theme";
import { motion } from "framer-motion";

export const Header: React.FC<{
    projectsRef: React.MutableRefObject<HTMLElement | null>, footerRef: React.MutableRefObject<HTMLElement | null>
}> = ({ projectsRef, footerRef }) => {
    return (
        <Hero
            component={motion.div}
            initial={{ opacity: 0, transform: "translate(0, 10vh)" }}
            whileInView={{ opacity: 1, transform: "translate(0, 0)" }}
        >
            <Stack
                flex={"1 2 60%"}
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
                        I am a 9th grade
                    </Typography>
                    <br /> American student in China.
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
                        onClick={() => footerRef.current?.scrollIntoView({ behavior: "smooth" })}
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
                        onClick={() => projectsRef.current?.scrollIntoView({ behavior: "smooth" })}
                    >
                        <Typography variant={"button"}>
                            VIEW ALL WORKS
                        </Typography>
                    </BaseButton>
                </Stack>
            </Stack>
            <Headshot style={{ flex: "1 1 40%", height: "auto", maxHeight: "511px", width: "100%" }} />
        </Hero>
    )
}