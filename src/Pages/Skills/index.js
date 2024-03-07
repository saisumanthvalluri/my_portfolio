import { useContext } from "react";
import { SkillImg, SkillItem, SkillName, SkillsContainer, SkillsList } from "./styledComponents";
import { ThemeContext } from "../../Context/ThemeContextApi";
import CustomSectionTag from "../../Components/CustomSectionTag";
import CustomSectionCaption from "../../Components/CustomSectionCaption";
import { Config_Vars } from "../../Assets/Constants";
import "./index.css";

const Skills = () => {
    const { dark } = useContext(ThemeContext);
    return (
        <SkillsContainer id="skills">
            <CustomSectionTag name="Skills" theme={dark} />
            <CustomSectionCaption theme={dark} text="The skills, tools and technologies I am really good at:" />
            <SkillsList>
                {Config_Vars.skills.map((skill) => {
                    switch (skill.type) {
                        case "default":
                            return (
                                <SkillItem key={skill.id}>
                                    <skill.icon
                                        style={{ color: skill.color }}
                                        className="react-skill-icon"
                                        onClick={() => window?.open(skill.url, "_blank")}
                                    />
                                    <SkillName theme={dark}>{skill.name}</SkillName>
                                </SkillItem>
                            );
                        case "img":
                            return (
                                <SkillItem key={skill.id}>
                                    <SkillImg src={skill.icon} alt={skill.name} style={{ width: "45px" }} />
                                    <SkillName theme={dark}>{skill.name}</SkillName>
                                </SkillItem>
                            );

                        case "toggle":
                            return (
                                <SkillItem key={skill.id}>
                                    {dark ? (
                                        <skill.icon.dark
                                            style={{ color: skill.color.dark }}
                                            className="react-skill-icon"
                                            onClick={() => window?.open(skill.url, "_blank")}
                                        />
                                    ) : (
                                        <skill.icon.light
                                            style={{ color: skill.color.light }}
                                            className="react-skill-icon"
                                            onClick={() => window?.open(skill.url, "_blank")}
                                        />
                                    )}
                                    <SkillName theme={dark}>{skill.name}</SkillName>
                                </SkillItem>
                            );
                        case "colorToggle":
                            return (
                                <SkillItem key={skill.id}>
                                    <skill.icon
                                        style={{ color: dark ? skill.color.dark : skill.color.light }}
                                        className="react-skill-icon"
                                        onClick={() => window?.open(skill.url, "_blank")}
                                    />
                                    <SkillName theme={dark}>{skill.name}</SkillName>
                                </SkillItem>
                            );

                        default:
                            break;
                    }
                    return this.render;
                })}
            </SkillsList>
        </SkillsContainer>
    );
};
export default Skills;
