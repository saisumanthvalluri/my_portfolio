import { useContext, useState } from "react";
import { MdOutlineMailOutline, MdOutlineContentCopy } from "react-icons/md";
import { FiGithub, FiPhone } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import CustomSectionCaption from "../../Components/CustomSectionCaption";
import CustomSectionTag from "../../Components/CustomSectionTag";
import { ThemeContext } from "../../Context/ThemeContextApi";
import {
    ContactItemBox,
    ContactItemText,
    GetInTouchContainer,
    ContactItems,
    OtherContactText,
    MyIntroSocialMediaIconsBox,
    ToolTip,
} from "./styledComponents";
import { LinkIconBox } from "../../Components/StyledComponents";

const GetInTouch = () => {
    const { dark } = useContext(ThemeContext);
    const [type, setType] = useState(null);

    // const handleCopy = (copyText) => {
    //     navigator.clipboard.writeText(copyText.toString());
    //     setType(copyText);

    //     // setTimeout(() => {
    //     //     setType(null);
    //     // }, 2000);
    // };

    const handleCopy = (copyText) => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard
                .writeText(copyText.toString())
                .then(() => {
                    setType(copyText);
                })
                .catch((err) => {
                    console.error("Failed to copy text: ", err);
                });
        } else {
            // Fallback method for older browsers
            const textArea = document.createElement("textarea");
            textArea.value = copyText.toString();
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand("copy");
                setType(copyText);
            } catch (err) {
                console.error("Fallback: Oops, unable to copy", err);
            }
            document.body.removeChild(textArea);
        }
        // Optionally, reset the tooltip message after a delay
        setTimeout(() => {
            setType(null);
        }, 2000);
    };

    return (
        <GetInTouchContainer id="contact">
            <CustomSectionTag theme={dark} name="Get In Touch" />
            <CustomSectionCaption
                theme={dark}
                text="What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect."
            />
            <ContactItems>
                <ContactItemBox>
                    <MdOutlineMailOutline
                        fontSize="32px"
                        className="socialmedia-icons"
                        color={dark ? "#D1D5DB" : "#4B5563"}
                    />
                    {/* <a href="mailto:vsaisumanth9951@gmail.com" target="_blank" rel="noreferrer">
                    vsaisumanth9951@gmail.com
                </a> */}
                    <ContactItemText theme={dark}>vsaisumanth9951@gmail.com</ContactItemText>

                    <LinkIconBox theme={dark}>
                        <MdOutlineContentCopy
                            fontSize="32px"
                            className="socialmedia-icons"
                            color={dark ? "#D1D5DB" : "#4B5563"}
                            style={{ cursor: "pointer" }}
                            onClick={() => handleCopy("vsaisumanth9951@gmail.com")}
                        />
                    </LinkIconBox>
                    {type !== "+91 9951442684" && type && <ToolTip theme={dark}>Copied!</ToolTip>}
                </ContactItemBox>
                <ContactItemBox>
                    <FiPhone fontSize="32px" className="socialmedia-icons" color={dark ? "#D1D5DB" : "#4B5563"} />
                    <ContactItemText theme={dark}>+91 99514 42684</ContactItemText>
                    <LinkIconBox theme={dark}>
                        <MdOutlineContentCopy
                            fontSize="32px"
                            className="socialmedia-icons"
                            color={dark ? "#D1D5DB" : "#4B5563"}
                            style={{ cursor: "pointer" }}
                            onClick={() => handleCopy("+91 9951442684")}
                        />
                    </LinkIconBox>
                    {type === "+91 9951442684" && type && <ToolTip theme={dark}>Copied!</ToolTip>}
                </ContactItemBox>
            </ContactItems>

            <OtherContactText theme={dark}>You may also find me on these platforms!</OtherContactText>
            <MyIntroSocialMediaIconsBox>
                <LinkIconBox theme={dark}>
                    <FiGithub
                        fontSize="24px"
                        color={dark ? "#D1D5DB" : "#4B5563"}
                        onClick={() => window?.open("https://github.com/saisumanthvalluri", "_blank")}
                    />
                </LinkIconBox>
                <LinkIconBox theme={dark}>
                    <FaLinkedin
                        fontSize="24px"
                        color={dark ? "#D1D5DB" : "#4B5563"}
                        onClick={() => window?.open("https://www.linkedin.com/in/v-sai-sumanth/", "_blank")}
                    />
                </LinkIconBox>
                <LinkIconBox theme={dark}>
                    <RiTwitterXLine
                        fontSize="24px"
                        color={dark ? "#D1D5DB" : "#4B5563"}
                        onClick={() => window?.open("https://twitter.com/SaiSumanth_3123", "_blank")}
                    />
                </LinkIconBox>
            </MyIntroSocialMediaIconsBox>
        </GetInTouchContainer>
    );
};

export default GetInTouch;
