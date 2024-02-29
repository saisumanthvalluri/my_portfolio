import { useContext } from "react";
import {
    AboutProject,
    ProjectDetailsBox,
    ProjectHomePageImg,
    ProjectHomePageImgBox,
    ProjectLinkIcon,
    ProjectName,
    ProjectTechnologiesList,
    WorkContainer,
    WorkItemBox,
} from "./StyledComponents";
import CustomSectionTag from "../../Components/CustomSectionTag";
import CustomSectionCaption from "../../Components/CustomSectionCaption";
import { ThemeContext } from "../../Context/ThemeContextApi";
import jobbyapp from "../../Assets/Img/ProjectsHomePages/Jobby-app.png";
import nxtTrenz from "../../Assets/Img/ProjectsHomePages/NxtTrenz-app.png";
import nexWatch from "../../Assets/Img/ProjectsHomePages/NxtWatch-app.png";
import tastyKitchens from "../../Assets/Img/ProjectsHomePages/TastyKitchens.png";
// import darkProjectLinkIcon from "../../Assets/Img/Buttons/project-link-Icon-dark.svg";
import lightProjectLinkIcon from "../../Assets/Img/Buttons/project-link-icon-lite.svg";
import darkProjectLinkIcon from "../../Assets/Img/Buttons/DarkLink.svg";
import { Link } from "../../Components/StyledComponents";

const leftBorderRadius = "12px 0 0 12px";
const rightBorderRadius = "0 12px 12px 0";

const Work = () => {
    const { dark } = useContext(ThemeContext);
    return (
        <WorkContainer id="work">
            <CustomSectionTag theme={dark} name="Work" />
            <CustomSectionCaption theme={dark} text="Some of the noteworthy projects I have built:" />
            <WorkItemBox theme={dark} direction="row">
                <ProjectHomePageImgBox theme={dark} borderRadius={leftBorderRadius}>
                    <ProjectHomePageImg
                        src={jobbyapp}
                        alt="Jobby App Home"
                        onClick={() => window?.open("https://sumanthjobbyapp.ccbp.tech/", "_blank")}
                    />
                </ProjectHomePageImgBox>
                <ProjectDetailsBox theme={dark} borderRadius={rightBorderRadius}>
                    <ProjectName theme={dark}>Jobby App</ProjectName>
                    <AboutProject theme={dark}>
                        A Platform revolutionizes job searching, offering advanced filters for package, work type, and
                        employer ratings. The intuitive interface streamlines the process, providing users a seamless,
                        tailored job-hunting experience. Enhancing transparency, it empowers individuals to find ideal
                        opportunities effortlessly.
                        <br />
                        Username: rahul, Password: rahul@2021
                    </AboutProject>
                    <ProjectTechnologiesList>
                        <CustomSectionTag name="React" theme={dark} />
                        <CustomSectionTag name="Javascript" theme={dark} />
                        <CustomSectionTag name="Firebase" theme={dark} />
                        <CustomSectionTag name="Styled Components" theme={dark} />
                        <CustomSectionTag name="Authentication" theme={dark} />
                        <CustomSectionTag name="Authorization" theme={dark} />
                    </ProjectTechnologiesList>
                    <Link underline="no" href="https://sumanthjobbyapp.ccbp.tech/" target="_blank">
                        <ProjectLinkIcon src={dark ? darkProjectLinkIcon : lightProjectLinkIcon} theme={dark} />
                    </Link>
                </ProjectDetailsBox>
            </WorkItemBox>
            <WorkItemBox theme={dark} direction="row-reverse">
                <ProjectHomePageImgBox theme={dark} borderRadius={rightBorderRadius}>
                    <ProjectHomePageImg
                        src={nxtTrenz}
                        alt="Nxttrendz Home"
                        onClick={() => window?.open("https://ntrendsumanth.ccbp.tech/", "_blank")}
                    />
                </ProjectHomePageImgBox>
                <ProjectDetailsBox theme={dark} borderRadius={leftBorderRadius}>
                    <ProjectName theme={dark}>NxtTrendz (Flipkart / Amazon)</ProjectName>
                    <AboutProject theme={dark}>
                        {/* I've crafted an all-encompassing shopping application akin to Flipkart/Amazon, offering a
                        diverse range of products from clothing, toys, electronics, groceries to appliances. The
                        platform boasts refined filters for seamless navigation, categorizing items and allowing users
                        to filter by rating. With a user-friendly cart feature, customers can effortlessly manage their
                        purchases. The inclusion of a secure register and login system ensures a personalized
                        experience, distinguishing between prime and non-prime users. Prime members enjoy exclusive
                        deals, all presented through a responsive design for optimal user interaction. This project
                        epitomizes a comprehensive and user-centric shopping experience. */}
                        A Platform for robust shopping app similar to Flipkart/Amazon, offering diverse products with
                        refined filters for easy navigation. The user-friendly cart and secure login system enhance the
                        purchasing experience, with exclusive deals for prime members on a responsive platform. My
                        project combines versatility, user convenience, and exclusive benefits for a seamless shopping
                        journey.
                        <br />
                        Username: rahul, Password: rahul@2021
                    </AboutProject>
                    <ProjectTechnologiesList>
                        <CustomSectionTag name="React" theme={dark} />
                        <CustomSectionTag name="Javascript" theme={dark} />
                        <CustomSectionTag name="Firebase" theme={dark} />
                        <CustomSectionTag name="Styled Components" theme={dark} />
                        <CustomSectionTag name="Authentication" theme={dark} />
                        <CustomSectionTag name="Authorization" theme={dark} />
                        <CustomSectionTag name="Context API" theme={dark} />
                    </ProjectTechnologiesList>
                    <Link href="https://ntrendsumanth.ccbp.tech/" target="_blank">
                        <ProjectLinkIcon src={dark ? darkProjectLinkIcon : lightProjectLinkIcon} theme={dark} />
                    </Link>
                </ProjectDetailsBox>
            </WorkItemBox>
            <WorkItemBox theme={dark} direction="row">
                <ProjectHomePageImgBox theme={dark} borderRadius={leftBorderRadius}>
                    <ProjectHomePageImg
                        src={nexWatch}
                        alt="NXTwatch Home"
                        onClick={() => window?.open("https://nwatchsumanth.ccbp.tech/", "_blank")}
                    />
                </ProjectHomePageImgBox>
                <ProjectDetailsBox theme={dark} borderRadius={rightBorderRadius}>
                    <ProjectName theme={dark}>NXTWatch (YouTube)</ProjectName>
                    <AboutProject theme={dark}>
                        {/* A platform for immersive video experiences, my YouTube-inspired app provides user
                        authentication, video watching, and a powerful search function. With personalized sections such
                        as Home, Trending, Gaming, and Saved Videos, users can effortlessly save and like videos. The
                        unique toggle theme ensures a seamless transition between Dark and Light modes, enhancing the
                        viewing experience on this responsive platform. */}
                        A platform for immersive video experiences, my YouTube-inspired app provides user
                        authentication, personalized sections, and a unique toggle theme for seamless transitions
                        between Dark and Light modes. Users can effortlessly save and like videos in this dynamic and
                        responsive platform.
                        <br />
                        Username: rahul, Password: rahul@2021
                    </AboutProject>
                    <ProjectTechnologiesList>
                        <CustomSectionTag name="React" theme={dark} />
                        <CustomSectionTag name="Javascript" theme={dark} />
                        <CustomSectionTag name="Styled Components" theme={dark} />
                        <CustomSectionTag name="Firebase" theme={dark} />
                        <CustomSectionTag name="Authentication" theme={dark} />
                        <CustomSectionTag name="Authorization" theme={dark} />
                        <CustomSectionTag name="Context API" theme={dark} />
                    </ProjectTechnologiesList>
                    <Link href="https://nwatchsumanth.ccbp.tech/" target="_blank">
                        <ProjectLinkIcon src={dark ? darkProjectLinkIcon : lightProjectLinkIcon} theme={dark} />
                    </Link>
                </ProjectDetailsBox>
            </WorkItemBox>
            <WorkItemBox theme={dark} direction="row-reverse">
                <ProjectHomePageImgBox theme={dark} borderRadius={rightBorderRadius}>
                    <ProjectHomePageImg
                        src={tastyKitchens}
                        alt="Tasty Kitchens Home"
                        onClick={() => window?.open("https://tasty-kitchens-app.web.app/", "_blank")}
                    />
                </ProjectHomePageImgBox>
                <ProjectDetailsBox theme={dark} borderRadius={leftBorderRadius}>
                    <ProjectName theme={dark}>Tasty Kitchens (Swiggy / Zomato)</ProjectName>
                    <AboutProject theme={dark}>
                        {/* A platform for dynamic food delivery experiences, my crafted application mirrors Swiggy/Zomato,
                        providing seamless searches for restaurants and food items with intuitive pagination. This
                        platform incorporates a sophisticated rating filter, user-friendly cart system, and secure
                        login/logout features. Prioritizing responsive design, the project guarantees an optimal and
                        enjoyable experience, catering to users in search of convenient and personalized food ordering. */}
                        A platform for dynamic food delivery experiences, my application mirrors Swiggy/Zomato, offering
                        seamless restaurant and food item searches with intuitive pagination. It prioritizes a
                        sophisticated rating filter, user-friendly cart system, and secure login/logout features,
                        ensuring an optimal and enjoyable experience for users seeking convenient and personalized food
                        ordering.
                        <br />
                        Username: rahul, Password: rahul@2021
                    </AboutProject>
                    <ProjectTechnologiesList>
                        <CustomSectionTag name="React" theme={dark} />
                        <CustomSectionTag name="Javascript" theme={dark} />
                        <CustomSectionTag name="Styled Components" theme={dark} />
                        <CustomSectionTag name="Firebase" theme={dark} />
                        <CustomSectionTag name="Authentication" theme={dark} />
                        <CustomSectionTag name="Authorization" theme={dark} />
                        <CustomSectionTag name="Context API" theme={dark} />
                    </ProjectTechnologiesList>
                    <Link href="https://tasty-kitchens-app.web.app/" target="_blank">
                        <ProjectLinkIcon src={dark ? darkProjectLinkIcon : lightProjectLinkIcon} theme={dark} />
                    </Link>
                </ProjectDetailsBox>
            </WorkItemBox>
        </WorkContainer>
    );
};

export default Work;
