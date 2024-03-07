import {
    AboutContainer,
    AboutImg,
    AboutImgBox,
    AboutImgTextBox,
    AboutText,
    AboutTextBox,
    AboutTextHeading,
    QuickBite,
    QuickBitesList,
} from "./StyledComponents";
import CustomSectionTag from "../../Components/CustomSectionTag";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContextApi";
import myImage from "../../Assets/Img/myImage2.jpg";
import { Link } from "../../Components/StyledComponents";
import { Config_Vars } from "../../Assets/Constants";

const AboutMe = () => {
    const { dark } = useContext(ThemeContext);
    return (
        <AboutContainer theme={dark} id="about">
            <CustomSectionTag name="About" theme={dark} />
            <AboutImgTextBox>
                <AboutImgBox theme={dark}>
                    <AboutImg src={myImage} theme={dark} alt="my Image" />
                </AboutImgBox>
                <AboutTextBox>
                    <AboutTextHeading theme={dark}>Curious about me? Here you have it:</AboutTextHeading>
                    <AboutText theme={dark}>{Config_Vars.aboutText.text1}</AboutText>
                    <AboutText theme={dark}>{Config_Vars.aboutText.text2}</AboutText>
                    <AboutText theme={dark}>{Config_Vars.aboutText.text3}</AboutText>
                    <AboutText theme={dark}>
                        {Config_Vars.aboutText.text4}{" "}
                        <Link
                            underline="yes"
                            theme={dark}
                            // onClick={() => window?.open("https://github.com/saisumanthvalluri", "_blank")}
                        >
                            Twitter
                        </Link>{" "}
                        {Config_Vars.aboutText.text5}{" "}
                        <Link
                            theme={dark}
                            underline="yes"
                            onClick={() => window?.open("https://github.com/saisumanthvalluri", "_blank")}>
                            GitHub
                        </Link>
                        .
                    </AboutText>
                    <AboutText theme={dark}>Finally, some quick bits about me.</AboutText>
                    <QuickBitesList>
                        {Config_Vars.aboutText.quickBites.map((bite) => (
                            <QuickBite theme={dark} key={bite.id}>
                                {bite.text}
                            </QuickBite>
                        ))}
                    </QuickBitesList>
                    <AboutText theme={dark}>{Config_Vars.aboutText.text6}</AboutText>
                </AboutTextBox>
            </AboutImgTextBox>
        </AboutContainer>
    );
};

export default AboutMe;
