import { useContext } from "react";
import { FiGithub, FiTwitter } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
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
import { LinkIconBox } from "../../Components/StyledComponents";
import { Config_Vars } from "../../Assets/Constants";

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
                       {Config_Vars.introText}
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
                        <LinkIconBox theme={dark}>
                            <FiGithub fontSize="24px" color={dark ? "#D1D5DB" : "#4B5563"} />
                        </LinkIconBox>
                        <LinkIconBox theme={dark}>
                            <FaLinkedin fontSize="24px" color={dark ? "#D1D5DB" : "#4B5563"} />
                        </LinkIconBox>
                        <LinkIconBox theme={dark}>
                            <FiTwitter fontSize="24px" color={dark ? "#D1D5DB" : "#4B5563"} />
                        </LinkIconBox>
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
