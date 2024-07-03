import styled from "styled-components";

export const StyledDrawer = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 100%;
    background-color: ${(props) => (props.theme === true ? "#111827" : "#fff")};
`;

export const DrawerHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px 0 15px;
`;

export const CrossIcon = styled.img`
    width: 40px;
    height: 40px;
`;

export const MobileNavmenuBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 15px;
    border-top: 1px solid ${(props) => (props.theme === true ? "#6d6e70" : "#f3f4f6")};
    border-bottom: 1px solid ${(props) => (props.theme === true ? "#6d6e70" : "#f3f4f6")};
`;

export const SwitchThemeBtn = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
`;

export const SwitchThemeText = styled.p`
    font-size: 18px;
    font-weight: 400;
    color: ${(props) => (props.theme === true ? "#D1D5DB" : "#4B5563")};
`;

export const MobileDownloadCVBtn = styled.button`
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

export const Link = styled.a`
    text-decoration: ${(props) => (props.underline === "yes" ? "underline" : "none")};
    cursor: pointer;

    &:hover {
        color: ${(props) => (props.theme === true ? "#f2f4f7" : "#22262b")};
        transition: all 0.3s ease-in-out;
    }
`;

export const LinkIconBox = styled.div`
    padding: 7px;
    border-radius: 4px;
    transition: all 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
        background-color: ${(props) => (props.theme === true ? "#111827" : "#F3F4F6")};
        transition: all 0.3s ease-in-out;
    }
`;
