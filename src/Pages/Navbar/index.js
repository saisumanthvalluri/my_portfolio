import { useContext, useEffect, useState } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { BsMoonStars } from "react-icons/bs";
import {
    NavContainer,
    Logo,
    NavMenuBox,
    NavmenuItem,
    // Divider,
    Seperator,
    // ThemeIcon,
    DownloadCVBtn,
    MobileMenuIcon,
    ThemeToggleBtn,
} from "./StyledComponents";
import LightLogo from "../../Assets/Img/SSLogo.svg";
import DarkLogo from "../../Assets/Img/DarkLogo.svg";
import DarkmenuIcon from "../../Assets/Img/DarkMenuIcon.svg";
import LightMenuIcon from "../../Assets/Img/LightMenuIcon.svg";
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

        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash) {
                const targetElement = document.querySelector(hash);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                }
            }
        };

        // Initial check on component mount
        handleResize();
        handleHashChange();

        // Add event listeners for window resize and hash change
        window.addEventListener("resize", handleResize);
        window.addEventListener("hashchange", handleHashChange);

        // Clean up the event listeners on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("hashchange", handleHashChange);
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
                {/* <Divider src={dark ? LightDivider : DarkDivider} alt="divider" /> */}
                <Seperator theme={dark}>|</Seperator>
                <ThemeToggleBtn theme={dark} onClick={() => setDark((prev) => !prev)}>
                    {dark ? <BsMoonStars fontSize={25} /> : <IoSunnyOutline />}
                </ThemeToggleBtn>
                {/* <ThemeIcon src={!dark ? DarkmodeIcon : LightmodeIcon} onClick={() => setDark((prev) => !prev)} /> */}
                {/* <IoSunnyOutline className="theme-toggle-icon" onClick={() => setDark((prev) => !prev)} /> */}
                <DownloadCVBtn
                    theme={dark}
                    onClick={() => window?.open("/files/Sai_Sumanth_Resume_02_02_2025.pdf", "_blank")}>
                    Download CV
                </DownloadCVBtn>
            </NavMenuBox>
        </NavContainer>
    );
};

export default Navbar;
