import { useContext } from "react";
import { SiJirasoftware } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { FaAngular, FaCss3Alt, FaHtml5, FaReact, FaNodeJs, FaSass, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiNextdotjs, SiExpress } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SkillImg, SkillItem, SkillName, SkillsContainer, SkillsList } from "./styledComponents";
import { ThemeContext } from "../../Context/ThemeContextApi";
import CustomSectionTag from "../../Components/CustomSectionTag";
import figma from "../../Assets/Img/Skills/icon-figma.svg";
import "./index.css";
import CustomSectionCaption from "../../Components/CustomSectionCaption";

const Skills = () => {
    const { dark } = useContext(ThemeContext);
    return (
        <SkillsContainer id="skills">
            <CustomSectionTag name="Skills" theme={dark} />
            <CustomSectionCaption theme={dark} text="The skills, tools and technologies I am really good at:" />

            <SkillsList>
                <SkillItem>
                    <SiJavascript
                        style={{ color: "#f5de07" }}
                        className="react-skill-icon"
                        onClick={() =>
                            window?.open("https://developer.mozilla.org/en-US/docs/Web/JavaScript", "_blank")
                        }
                    />
                    <SkillName theme={dark}>Java Srcipt</SkillName>
                </SkillItem>
                <SkillItem>
                    <SiTypescript
                        style={{ color: "#0ba5d9" }}
                        className="react-skill-icon"
                        onClick={() => window?.open("https://www.typescriptlang.org/", "_blank")}
                    />
                    <SkillName theme={dark}>Type Srcipt</SkillName>
                </SkillItem>

                <SkillItem>
                    <FaReact
                        style={{ color: "#0f84ab" }}
                        className="react-skill-icon"
                        onClick={() => window?.open("https://react.dev/", "_blank")}
                    />
                    <SkillName theme={dark}>React</SkillName>
                </SkillItem>

                <SkillItem>
                    <FaAngular
                        style={{ color: "#e62044" }}
                        className="react-skill-icon"
                        onClick={() => window?.open("https://angular.io/start", "_blank")}
                    />
                    <SkillName theme={dark}>Angular</SkillName>
                </SkillItem>

                <SkillItem>
                    {dark ? (
                        <TbBrandNextjs
                            style={{ color: "#fff" }}
                            className="react-skill-icon"
                            onClick={() => window?.open("https://nextjs.org/", "_blank")}
                        />
                    ) : (
                        <SiNextdotjs
                            style={{ color: "#000" }}
                            className="react-skill-icon"
                            onClick={() => window?.open("https://nextjs.org/", "_blank")}
                        />
                    )}
                    <SkillName theme={dark}>Next Js</SkillName>
                </SkillItem>

                <SkillItem>
                    <FaNodeJs
                        style={{ color: "#159923" }}
                        className="react-skill-icon"
                        onClick={() => window?.open("https://nodejs.org/en", "_blank")}
                    />
                    <SkillName theme={dark}>Node</SkillName>
                </SkillItem>

                <SkillItem>
                    <SiExpress
                        style={{ color: dark ? "#FFF" : "#000" }}
                        className="react-skill-icon"
                        onClick={() => window?.open("https://expressjs.com/", "_blank")}
                    />
                    <SkillName theme={dark}>Express</SkillName>
                </SkillItem>

                <SkillItem>
                    <SkillImg
                        src={figma}
                        alt="figma"
                        style={{ width: "45px" }}
                        onClick={() => window?.open("https://www.figma.com/", "_blank")}
                    />
                    <SkillName theme={dark}>Figma</SkillName>
                </SkillItem>

                <SkillItem>
                    <FaSass
                        style={{ color: "#c73aa8" }}
                        className="react-skill-icon"
                        onClick={() => window?.open("https://sass-lang.com/", "_blank")}
                    />
                    <SkillName theme={dark}>SASS/SCSS</SkillName>
                </SkillItem>

                <SkillItem>
                    <FaGitAlt
                        style={{ color: "#f74d0a" }}
                        className="react-skill-icon"
                        onClick={() => window?.open("https://git-scm.com/", "_blank")}
                    />
                    <SkillName theme={dark}>Git</SkillName>
                </SkillItem>

                <SkillItem>
                    <SiJirasoftware
                        style={{ color: "#23a3e8" }}
                        className="react-skill-icon"
                        onClick={() => window?.open("https://www.atlassian.com/software", "_blank")}
                    />
                    <SkillName theme={dark}>Jira</SkillName>
                </SkillItem>

                <SkillItem>
                    <SiFastapi
                        style={{ color: "#16d987" }}
                        className="react-skill-icon"
                        onClick={() => window?.open("https://fastapi.tiangolo.com/", "_blank")}
                    />
                    <SkillName theme={dark}>Fast API</SkillName>
                </SkillItem>

                <SkillItem>
                    <FaHtml5
                        style={{ color: "#e63029" }}
                        className="react-skill-icon"
                        onClick={() => window?.open("https://developer.mozilla.org/en-US/docs/Web/HTML", "_blank")}
                    />
                    <SkillName theme={dark}>HTML</SkillName>
                </SkillItem>

                <SkillItem>
                    <FaCss3Alt
                        style={{ color: "#18a7db" }}
                        className="react-skill-icon"
                        onClick={() => window?.open("https://developer.mozilla.org/en-US/docs/Web/css", "_blank")}
                    />
                    <SkillName theme={dark}>CSS</SkillName>
                </SkillItem>
            </SkillsList>
        </SkillsContainer>
    );
};
export default Skills;
