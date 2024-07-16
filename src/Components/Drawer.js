import Drawer from "@mui/material/Drawer";
import styled from "styled-components";
import { NavmenuItem, ThemeIcon } from "../Pages/Navbar/StyledComponents";
import darkCrossIcon from "../Assets/Img/DarkCrossIcon.svg";
import lightCrossIcon from "../Assets/Img/LightCrossIcon.svg";
import DarkTIcon from "../Assets/Img/DarkThmeIcon.svg";
import LightTIcon from "../Assets/Img/LightTheamIcon.svg";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContextApi";

const StyledDrawer = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 100%;
    background-color: ${(props) => (props.theme === true ? "#111827" : "#fff")};
`;

const DrawerHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px 0 15px;
`;

const CrossIcon = styled.img`
    width: 40px;
    height: 40px;
`;

const MobileNavmenuBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 15px;
    border-top: 1px solid ${(props) => (props.theme === true ? "#6d6e70" : "#f3f4f6")};
    border-bottom: 1px solid ${(props) => (props.theme === true ? "#6d6e70" : "#f3f4f6")};
`;

const SwitchThemeBtn = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
`;

const SwitchThemeText = styled.p`
    font-size: 18px;
    font-weight: 400;
    color: ${(props) => (props.theme === true ? "#D1D5DB" : "#4B5563")};
`;

const MobileDownloadCVBtn = styled.button`
    width: 92%;
    height: 43px;
    border-radius: 13px;
    cursor: pointer;
    border: none;
    background-color: ${(props) => (props.theme === true ? "#F9FAFB" : "#111827")};
    color: ${(props) => (props.theme === true ? "#111827" : "#F9FAFB")};
    font-size: 16px;
    font-weight: 600;
    align-self: center;
`;

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
                    <NavmenuItem theme={dark} href="#about" onClick={() => setopen(false)}>
                        About
                    </NavmenuItem>
                    <NavmenuItem theme={dark} href="#work" onClick={() => setopen(false)}>
                        Work
                    </NavmenuItem>
                    <NavmenuItem theme={dark} href="#testimonials" onClick={() => setopen(false)}>
                        Testimonials
                    </NavmenuItem>
                    <NavmenuItem theme={dark} href="#contact" onClick={() => setopen(false)}>
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
                    onClick={() => window?.open("/files/Sai_Sumanth_Resume_16_07_2024.pdf", "_blank")}>
                    Download CV
                </MobileDownloadCVBtn>
            </StyledDrawer>
        </Drawer>
    );
};

export default BasicDrawer;
