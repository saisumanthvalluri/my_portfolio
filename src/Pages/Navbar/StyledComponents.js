import styled from "styled-components";

export const NavContainer = styled.div`
    height: 68px;
    position: sticky;
    top: 0;
    z-index: 1000;
    // border: 1px solid red;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 45px;
    padding-right: 45px;
    // background-color: ${(props) => (props.theme === true ? "#111827" : "#fff")};
    -webkit-backdrop-filter: blur(30px);
    backdrop-filter: blur(30px);
    border-bottom: 1px solid ${(props) => (props.theme === true ? "#111827" : "#fff")};

    @media (max-width: 767px) {
        padding-left: 30px;
        padding-right: 30px;
        backdrop-filter: blur(4px);
        height: 55px;
    }
`;

export const Logo = styled.img`
    width: 90px;
    height: 70px;

    @media (max-width: 767px) {
        width: 55px;
        height: 60px;
    }
`;

export const NavMenuBox = styled.div`
    // width: 500px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 25px;
    // border: 1px solid blue;

    @media (max-width: 767px) {
        display: none;
    }
`;

export const MobileMenuIcon = styled.img`
    width: 40px;
    height: 40px;
    cursor: pointer;

    @media (min-width: 767px) {
        display: none;
    }
`;

export const NavmenuItem = styled.a`
    text-decoration: none;
    color: ${(props) => (props.theme === true ? "#D1D5DB" : "#4b5563")};
    font-size: 16px;
    font-weight: 500;

    &:hover {
        color: ${(props) => (props.theme === true ? "#f2f4f7" : "#22262b")};
    }
`;

export const Divider = styled.img`
    height: 30px;
`;

export const ThemeIcon = styled.img`
    height: 28px;
    width: 28px;
    cursor: pointer;
`;

export const DownloadCVBtn = styled.button`
    width: 140px;
    height: 36px;
    border-radius: 13px;
    cursor: pointer;
    border: none;
    background-color: ${(props) => (props.theme === true ? "#F9FAFB" : "#111827")};
    color: ${(props) => (props.theme === true ? "#111827" : "#F9FAFB")};
    font-size: 16px;
    font-weight: 600;
    outline: none;
`;
