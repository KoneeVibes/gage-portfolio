import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material"
import { AboutIcon } from "../../assets"
import { AboutStack } from "./styled"
import header from "../../assets/headerPhoto.svg";

export const About: React.FC<{}> = () => {
    return (
        <AboutStack id="about">
            <Box
                sx={{
                    flex: "1 1 50%",
                    backgroundImage: `url(${header})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    borderRadius: "67px",
                    minHeight: { mobile: "732px", laptop: "auto" }
                }}
            />
            <Card
                sx={{
                    flex: "1 1 50%",
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    boxShadow: "none",
                    padding: "0",
                }}
            >
                <CardHeader
                    avatar={<AboutIcon style={{ width: "100%" }} />}
                    title={
                        <Typography
                            variant="h2"
                            fontFamily={"Montserrat"}
                            fontWeight={700}
                            lineHeight={1.4}
                            fontSize={{ mobile: "20px", miniTablet: "29px" }}
                        >
                            About me
                        </Typography>
                    }
                    sx={{ padding: { mobile: "1rem 0", laptop: "1rem" } }}
                />
                <CardContent
                    sx={{ padding: { mobile: "1rem 0", laptop: "1rem" } }}
                >
                    <Typography
                        variant="body1"
                        whiteSpace={"normal"}
                        fontFamily={"Montserrat"}
                        fontWeight={400}
                        fontSize={{ mobile: "16px", tablet: "22px" }}
                        lineHeight={1.4}
                    >
                        Hi everyone, my name is Gage and I am in 9th grade at Nanshan Huitong School. I have a strong interest in computer science that started from my love of gaming and science. I first learned scratch and quickly after that learned python. When I was 12 I made game using Swift to help students learn the periodic table that won the Apple WWDC student scholarship and later learned Lua to make a game celebrating Chinese traditions which won two awards for the Roblox national gaming competition. Up until then, I was shying away from the more challenging computer science path but as I started to love math, I began to get into competitions like ACSL.
                    </Typography>
                    <br />
                    <Typography
                        variant="body1"
                        whiteSpace={"normal"}
                        fontFamily={"Montserrat"}
                        fontWeight={400}
                        fontSize={{ mobile: "16px", tablet: "22px" }}
                        lineHeight={1.4}
                    >
                        Along the way, I moved from YKPAO school in Shanghai to Nanshan Whittle School in Shenzhen and that led me to find new interests outside of coding. I have spent the last two years more focused on acting, teaching, student government, squash, business and exploring new scientific areas than I have coding. It’s been wonderful. I still have a great interest in computer science and have been doing a project related to my two passions that ties AI into molecular dynamics but I have found there is so much more out there that enjoy diving into.
                    </Typography>
                </CardContent>
            </Card>
        </AboutStack>
    )
}