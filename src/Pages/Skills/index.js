import { useContext } from "react";
import { SiJirasoftware } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { FaAngular, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SkillImg, SkillItem, SkillName, SkillsContainer, SkillsList } from "./styledComponents";
import { ThemeContext } from "../../Context/ThemeContextApi";
import CustomSectionTag from "../../Components/CustomSectionTag";
import javascript from "../../Assets/Img/Skills/icon-javscript.svg";
import typescript from "../../Assets/Img/Skills/icon-typescript.svg";
import react from "../../Assets/Img/Skills/icon-react.svg";
import nextJs from "../../Assets/Img/Skills/icon-nextjs.svg";
import node from "../../Assets/Img/Skills/icon-nodejs.svg";
import expressLight from "../../Assets/Img/Skills/icon-express-light.svg";
import expressDark from "../../Assets/Img/Skills/icon-express-dark.svg";
import figma from "../../Assets/Img/Skills/icon-figma.svg";
import sass from "../../Assets/Img/Skills/icon-sass.svg";
import git from "../../Assets/Img/Skills/icon-git.svg";
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
                    <SkillImg
                        src={javascript}
                        alt="java script"
                        onClick={() =>
                            window?.open("https://developer.mozilla.org/en-US/docs/Web/JavaScript", "_blank")
                        }
                    />
                    <SkillName theme={dark}>Java Script</SkillName>
                </SkillItem>
                <SkillItem>
                    <SkillImg
                        src={typescript}
                        alt="type script"
                        onClick={() => window?.open("https://www.typescriptlang.org/", "_blank")}
                    />
                    <SkillName theme={dark}>Type Script</SkillName>
                </SkillItem>

                <SkillItem>
                    <SkillImg src={react} alt="react" onClick={() => window?.open("https://react.dev/", "_blank")} />
                    <SkillName theme={dark}>React</SkillName>
                </SkillItem>

                <SkillItem>
                    <FaAngular style={{ color: "#e62044" }} className="react-skill-icon" />
                    <SkillName theme={dark}>Angular</SkillName>
                </SkillItem>

                <SkillItem>
                    <SkillImg
                        src={nextJs}
                        alt="next js"
                        onClick={() => window?.open("https://nextjs.org/", "_blank")}
                    />
                    <SkillName theme={dark}>Next Js</SkillName>
                </SkillItem>

                <SkillItem>
                    <SkillImg src={node} alt="node" onClick={() => window?.open("https://nodejs.org/en", "_blank")} />
                    <SkillName theme={dark}>Node</SkillName>
                </SkillItem>

                <SkillItem>
                    <SkillImg
                        src={dark ? expressDark : expressLight}
                        alt="express"
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
                    <SkillImg src={sass} alt="sass" onClick={() => window?.open("https://sass-lang.com/", "_blank")} />
                    <SkillName theme={dark}>SASS/SCSS</SkillName>
                </SkillItem>

                <SkillItem>
                    <SkillImg src={git} alt="git" onClick={() => window?.open("https://git-scm.com/", "_blank")} />
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
