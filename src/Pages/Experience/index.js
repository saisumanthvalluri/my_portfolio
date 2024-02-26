import { useContext } from "react";
import CustomSectionTag from "../../Components/CustomSectionTag";
import {
    CompanyLogo,
    ExpDescriptionBox,
    ExperienceCard,
    ExperienceContainer,
    Specialization,
    SpecializationPoint,
    SpecializationPointsList,
    TimePeriod,
} from "./StyledComponents";
import { ThemeContext } from "../../Context/ThemeContextApi";
import CustomSectionCaption from "../../Components/CustomSectionCaption";
import iLDark from "../../Assets/Img/Logos/IL-Logo-dark.svg";
import logo from "../../Assets/Img/Logos/Logo.svg";

const Experience = () => {
    const { dark } = useContext(ThemeContext);
    return (
        <ExperienceContainer theme={dark}>
            <CustomSectionTag name="Experience" theme={dark} />
            <CustomSectionCaption theme={dark} text="Here is a quick summary of my most recent experiences:" />
            <ExperienceCard theme={dark}>
                <CompanyLogo src={dark ? iLDark : logo} />
                <ExpDescriptionBox>
                    <Specialization theme={dark}>Team Lead</Specialization>
                    <SpecializationPointsList>
                        <SpecializationPoint theme={dark}>
                            Acted as team lead in different projects.
                        </SpecializationPoint>
                        <SpecializationPoint theme={dark}>
                            Brainstormed new ideas & gathered requirements for internal projects.
                        </SpecializationPoint>
                        <SpecializationPoint theme={dark}>
                            Worked on enterprise-level projects for a variety of clients.
                        </SpecializationPoint>
                        <SpecializationPoint theme={dark}>
                            Handled sprint planning & task distribution.
                        </SpecializationPoint>
                        {/* <SpecializationPoint theme={dark}>Acted as team lead in different projects</SpecializationPoint> */}
                    </SpecializationPointsList>
                </ExpDescriptionBox>
                <TimePeriod theme={dark}>Aug 2023 - Present</TimePeriod>
            </ExperienceCard>

            <ExperienceCard theme={dark}>
                <CompanyLogo src={dark ? iLDark : logo} />
                <ExpDescriptionBox>
                    <Specialization theme={dark}>Full Stack Developer</Specialization>
                    <SpecializationPointsList>
                        <SpecializationPoint theme={dark}>
                            Worked as a full stack developer (React / Angular / Fast API)
                        </SpecializationPoint>
                    </SpecializationPointsList>
                </ExpDescriptionBox>
                <TimePeriod theme={dark}>Sep 2022 - Aug 2023</TimePeriod>
            </ExperienceCard>
        </ExperienceContainer>
    );
};

export default Experience;
