import Drawer from "@mui/material/Drawer";
import {
    DrawerHeader,
    StyledDrawer,
    CrossIcon,
    MobileNavmenuBox,
    SwitchThemeBtn,
    SwitchThemeText,
    MobileDownloadCVBtn,
} from "./StyledComponents";
import { NavmenuItem, ThemeIcon } from "../Pages/Navbar/StyledComponents";
import darkCrossIcon from "../Assets/Img/DarkCrossIcon.svg";
import lightCrossIcon from "../Assets/Img/LightCrossIcon.svg";
import DarkTIcon from "../Assets/Img/DarkThmeIcon.svg";
import LightTIcon from "../Assets/Img/LightTheamIcon.svg";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContextApi";

const BasicDrawer = (props) => {
    const { setopen, open, Logo, DarkLogo, LightLogo } = props;
    const { dark, setDark } = useContext(ThemeContext);
    return (
        <Drawer open={open} anchor="right" onClose={() => setopen(false)} id="Drawer">
            <StyledDrawer theme={dark}>
                <DrawerHeader>
                    <Logo src={dark ? DarkLogo : LightLogo} alt="logo" />
                    <CrossIcon src={dark ? darkCrossIcon : lightCrossIcon} onClick={() => setopen(false)} />
                </DrawerHeader>
                <MobileNavmenuBox theme={dark}>
                    <NavmenuItem theme={dark} href="#about">
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
                </MobileNavmenuBox>
                <SwitchThemeBtn>
                    <SwitchThemeText theme={dark}>Switch Theme</SwitchThemeText>
                    <ThemeIcon
                        src={dark ? DarkTIcon : LightTIcon}
                        alt="Theme icon"
                        onClick={() => setDark((prev) => !prev)}
                    />
                </SwitchThemeBtn>
                <MobileDownloadCVBtn
                    theme={dark}
                    onClick={() => window?.open("/files/Sai_Sumanth_2024-01-27.pdf", "_blank")}>
                    Download CV
                </MobileDownloadCVBtn>
            </StyledDrawer>
        </Drawer>
    );
};

export default BasicDrawer;
