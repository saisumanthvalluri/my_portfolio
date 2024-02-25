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
import background from "../../Assets/Img/Backgrounds/Background.svg";
import darkAboutBg from "../../Assets/Img/Backgrounds/DarkaboutBg.svg";
import myImage from "../../Assets/Img/myImage2.jpg";
import { Link } from "../../Components/StyledComponents";

const AboutMe = () => {
    const { dark } = useContext(ThemeContext);
    return (
        <AboutContainer theme={dark} id="about">
            <CustomSectionTag name="About" theme={dark} />
            <AboutImgTextBox>
                <AboutImgBox background={dark ? darkAboutBg : background}>
                    <AboutImg src={myImage} theme={dark} alt="my Image" />
                </AboutImgBox>
                <AboutTextBox>
                    <AboutTextHeading theme={dark}>Curious about me? Here you have it:</AboutTextHeading>
                    <AboutText theme={dark}>
                        I'm a passionate, self-proclaimed Front-end who specializes in full stack development (React.js
                        & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital
                        products to life. User experience, pixel perfect design, and writing clear, readable, highly
                        performant code matters to me.
                    </AboutText>
                    <AboutText theme={dark}>
                        I began my journey as a web developer in 2022, and since then, I've continued to grow and evolve
                        as a developer, taking on new challenges and learning the latest technologies along the way.
                        Now, in my early thirties, 2 years after starting my web development journey, I'm building
                        cutting-edge web applications using modern technologies such as Next.js, ReactJs, TypeScript,
                        and much more.
                    </AboutText>
                    <AboutText theme={dark}>
                        I am very much a progressive thinker and enjoy working on products end to end, from ideation all
                        the way to development.
                    </AboutText>
                    <AboutText theme={dark}>
                        When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie
                        hacker, witnessing the journey of early startups or enjoying some free time. You can follow me
                        on{" "}
                        <Link
                            underLine={true}
                            // onClick={() => window?.open("https://github.com/saisumanthvalluri", "_blank")}
                        >
                            Twitter
                        </Link>{" "}
                        where I share tech-related bites and build in public, or you can follow me on{" "}
                        <Link
                            underLine={true}
                            onClick={() => window?.open("https://github.com/saisumanthvalluri", "_blank")}>
                            GitHub
                        </Link>
                        .
                    </AboutText>
                    <AboutText theme={dark}>Finally, some quick bits about me.</AboutText>
                    <QuickBitesList>
                        <QuickBite theme={dark}>B.Tech in Mechanical Engineering</QuickBite>
                        <QuickBite theme={dark}>Avid learner</QuickBite>
                        <QuickBite theme={dark}>Full time freelancer</QuickBite>
                        <QuickBite theme={dark}>Aspiring indie hacker</QuickBite>
                    </QuickBitesList>
                    <AboutText theme={dark}>
                        One last thing, I'm available for freelance work, so feel free to reach out and say hello! I
                        promise I don't bite 😉
                    </AboutText>
                </AboutTextBox>
            </AboutImgTextBox>
        </AboutContainer>
    );
};

export default AboutMe;
