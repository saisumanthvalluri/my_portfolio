import { useContext } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
    IntroContainer,
    IntroTextBox,
    IntroTextImgBox,
    Name,
    NameBox,
    HandIcon,
    IntroText,
    LocationBox,
    IntroIcons,
    MyIntroImgBox,
    MyImage,
    MyIntroSocialMediaIconsBox,
} from "./StyledComponents";
import { ThemeContext } from "../../Context/ThemeContextApi";
import lightLocation from "../../Assets/Img/LightLocation.svg";
import darkLocation from "../../Assets/Img/DarkLocation.svg";
import { PulseRing } from "../../Components/PulseRing";
import myImage from "../../Assets/Img/myImage.jpeg";
import githubLite from "../../Assets/Img/SocialMediaIcons/Github_Light.svg";
import githubDark from "../../Assets/Img/SocialMediaIcons/Github_Dark.svg";
import twitterLite from "../../Assets/Img/SocialMediaIcons/Twitter_Light.svg";
import twitterDark from "../../Assets/Img/SocialMediaIcons/Twitter_Dark.svg";

const Intro = () => {
    const { dark } = useContext(ThemeContext);
    return (
        <IntroContainer id="home">
            <IntroTextImgBox>
                <IntroTextBox>
                    <NameBox>
                        <Name theme={dark}>Hi, I'm Sumanth</Name>
                        <HandIcon>👋</HandIcon>
                    </NameBox>
                    <IntroText theme={dark}>
                        I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally
                        designing) exceptional digital experiences that are fast, accessible, visually appealing, and
                        responsive. Even though I have been creating web applications for over 2 years, I still love it
                        as if it was something new.
                    </IntroText>
                    <LocationBox>
                        <IntroIcons src={dark ? darkLocation : lightLocation} alt="location" />
                        <IntroText theme={dark}>Hyderabad, India</IntroText>
                    </LocationBox>
                    <LocationBox>
                        <PulseRing />
                        <IntroText theme={dark} style={{ marginLeft: "24px" }}>
                            Available for new projects
                        </IntroText>
                    </LocationBox>
                    <MyIntroSocialMediaIconsBox>
                        <IntroIcons
                            src={dark ? githubDark : githubLite}
                            alt="github icon"
                            style={{ cursor: "pointer" }}
                            onClick={() => window?.open("https://github.com/saisumanthvalluri", "_blank")}
                        />
                        {/* {dark ? <LinkedInIcon color="#D1D5DB" /> : <LinkedInIcon color="#D1D5DB" />} */}
                        <LinkedInIcon
                            sx={{ color: dark ? "#D1D5DB" : "#4B5563", fontSize: "25px", cursor: "pointer" }}
                            onClick={() => window?.open("https://www.linkedin.com/in/v-sai-sumanth/", "_blank")}
                        />
                        <IntroIcons
                            src={dark ? twitterDark : twitterLite}
                            alt="github icon"
                            style={{ cursor: "pointer" }}
                        />
                    </MyIntroSocialMediaIconsBox>
                </IntroTextBox>
                <MyIntroImgBox theme={dark}>
                    <MyImage theme={dark} src={myImage} alt="my image" />
                </MyIntroImgBox>
            </IntroTextImgBox>
        </IntroContainer>
    );
};

export default Intro;
