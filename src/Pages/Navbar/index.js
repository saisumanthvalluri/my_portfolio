import { useContext, useEffect, useState } from "react";
import {
    NavContainer,
    Logo,
    NavMenuBox,
    NavmenuItem,
    Divider,
    ThemeIcon,
    DownloadCVBtn,
    MobileMenuIcon,
} from "./StyledComponents";
import LightLogo from "../../Assets/Img/SSLogo.svg";
import LightDivider from "../../Assets/Img/LightDivider.svg";
import DarkDivider from "../../Assets/Img/DarkDivider.svg";
import DarkLogo from "../../Assets/Img/DarkLogo.svg";
import DarkmenuIcon from "../../Assets/Img/DarkMenuIcon.svg";
import LightmodeIcon from "../../Assets/Img/LightmodeIcon.svg";
import LightMenuIcon from "../../Assets/Img/LightMenuIcon.svg";
import DarkmodeIcon from "../../Assets/Img/DarkmodeIcon.svg";
import { ThemeContext } from "../../Context/ThemeContextApi";
import BasicDrawer from "../../Components/Drawer";
import { Link } from "../../Components/StyledComponents";

const Navbar = () => {
    const [open, setopen] = useState(false);
    const { dark, setDark } = useContext(ThemeContext);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 767) {
                setopen(false);
            }
        };

        // Initial check on component mount
        handleResize();

        // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <NavContainer theme={dark}>
            <Link href="#home" underline="no">
                <Logo src={dark ? DarkLogo : LightLogo} alt="logo" />
            </Link>
            <MobileMenuIcon src={dark ? DarkmenuIcon : LightMenuIcon} alt="menu icon" onClick={() => setopen(true)} />
            <BasicDrawer open={open} setopen={setopen} Logo={Logo} DarkLogo={DarkLogo} LightLogo={LightLogo} />
            <NavMenuBox>
                <NavmenuItem theme={dark} href="#about" onClick={() => setopen(false)}>
                    About
                </NavmenuItem>
                <NavmenuItem theme={dark} href="#work">
                    Work
                </NavmenuItem>
                <NavmenuItem theme={dark} href="#testimonials">
                    Testimonials
                </NavmenuItem>
                <NavmenuItem theme={dark} href="#contact">
                    Contact
                </NavmenuItem>
                <Divider src={dark ? DarkDivider : LightDivider} alt="divider" />
                <ThemeIcon src={!dark ? DarkmodeIcon : LightmodeIcon} onClick={() => setDark((prev) => !prev)} />
                <DownloadCVBtn theme={dark} onClick={() => window?.open("/files/Sai_Sumanth_2024-01-27.pdf", "_blank")}>
                    Download CV
                </DownloadCVBtn>
            </NavMenuBox>
        </NavContainer>
    );
};

export default Navbar;
