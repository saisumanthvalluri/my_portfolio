import { GoHeartFill } from "react-icons/go";

import { FooterContainer, FooterText } from "./styledComponents";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContextApi";
import { Link } from "../../Components/StyledComponents";

const Footer = () => {
    const { dark } = useContext(ThemeContext);
    return (
        <FooterContainer theme={dark}>
            <FooterText theme={dark}>
                <p>
                    Copyright © 2024 |{" "}
                    <Link
                        theme={dark}
                        underline="yes"
                        onClick={() => window?.open("https://github.com/saisumanthvalluri/my_portfolio", "_blank")}>
                        coded
                    </Link>{" "}
                    with
                </p>{" "}
                <GoHeartFill color="red" /> <p>by Sai Sumanth</p>
            </FooterText>
        </FooterContainer>
    );
};

export default Footer;
