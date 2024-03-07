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
import lightProjectLinkIcon from "../../Assets/Img/Buttons/project-link-icon-lite.svg";
import darkProjectLinkIcon from "../../Assets/Img/Buttons/DarkLink.svg";
import { Link } from "../../Components/StyledComponents";
import { Config_Vars } from "../../Assets/Constants";

const Work = () => {
    const { dark } = useContext(ThemeContext);
    return (
        <WorkContainer id="work">
            <CustomSectionTag theme={dark} name="Work" />
            <CustomSectionCaption theme={dark} text="Some of the noteworthy projects I have built:" />
            {Config_Vars.works.map((work) => (
                <WorkItemBox key={work.id} theme={dark} direction={work.direction}>
                    <ProjectHomePageImgBox theme={dark} borderradius={work.projectHomePage.borderRadius}>
                        <ProjectHomePageImg
                            src={work.projectHomePage.homePageImg}
                            alt={work.detail.name}
                            onClick={() => window?.open(work.url, "_blank")}
                        />
                    </ProjectHomePageImgBox>
                    <ProjectDetailsBox theme={dark} borderradius={work.detail.borderRadius}>
                        <ProjectName theme={dark}>{work.detail.name}</ProjectName>
                        <AboutProject theme={dark}>
                            {work.detail.description}
                            <br />
                            {work.detail["U&P"]}
                        </AboutProject>
                        <ProjectTechnologiesList>
                            {work.detail.technologies.map((technology) => (
                                <CustomSectionTag key={technology.id} name={technology.name} theme={dark} />
                            ))}
                        </ProjectTechnologiesList>
                        <Link underline="no" href={work.url} target="_blank">
                            <ProjectLinkIcon src={dark ? darkProjectLinkIcon : lightProjectLinkIcon} theme={dark} />
                        </Link>
                    </ProjectDetailsBox>
                </WorkItemBox>
            ))}
        </WorkContainer>
    );
};

export default Work;
