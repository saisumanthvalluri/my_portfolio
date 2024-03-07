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
import { Config_Vars } from "../../Assets/Constants";
import { ThemeContext } from "../../Context/ThemeContextApi";
import CustomSectionCaption from "../../Components/CustomSectionCaption";

const Experience = () => {
    const { dark } = useContext(ThemeContext);
    return (
        <ExperienceContainer theme={dark}>
            <CustomSectionTag name="Experience" theme={dark} />
            <CustomSectionCaption theme={dark} text="Here is a quick summary of my most recent experiences:" />

            {Config_Vars.experiences.map((experience) => (
                <ExperienceCard theme={dark} key={experience.id}>
                    <CompanyLogo src={dark ? experience.companyLogoDark : experience.companyLogoLight} />
                    <ExpDescriptionBox>
                        <Specialization theme={dark}>{experience.Specialization}</Specialization>
                        <SpecializationPointsList>
                            {experience.specializationPoints.map((point) => (
                                <SpecializationPoint theme={dark} key={point.id}>
                                    {point.pointText}
                                </SpecializationPoint>
                            ))}
                        </SpecializationPointsList>
                    </ExpDescriptionBox>
                    <TimePeriod theme={dark}>{experience.timePeriod}</TimePeriod>
                </ExperienceCard>
            ))}
        </ExperienceContainer>
    );
};

export default Experience;
