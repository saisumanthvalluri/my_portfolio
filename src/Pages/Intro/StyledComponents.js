import styled from "styled-components";

export const IntroContainer = styled.div`
    // height: calc(100vh - 70px);
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 767px) {
        height: calc(100vh - 55px);
        padding-bottom: 150px;
    }
`;

export const IntroTextImgBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 45px;
    padding-right: 30px;

    @media (max-width: 767px) {
        flex-direction: column-reverse;
        justify-content: none;
        align-items: center;
        padding-left: 15px;
        padding-right: 15px;
    }
`;

export const IntroTextBox = styled.div`
    width: 65%;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 767px) {
        position: relative;
        top: 90px;
        width: 100%;
    }
`;

export const NameBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Name = styled.h1`
    font-size: 60px;
    font-weight: 700;
    color: ${(props) => (props.theme === true ? "#F9FAFB" : "#111827")};
    margin: 0;

    @media (max-width: 767px) {
        font-size: 36px;
        line-height: 40px;
        font-weight: 600;
    }
`;

export const HandIcon = styled.span`
    font-size: 60px;
    animation: jump-shaking 2s linear 3;

    @keyframes jump-shaking {
        0% {
            transform: translateX(0);
        }
        25% {
            transform: translateY(-9px);
        }
        35% {
            transform: translateY(-9px) rotate(17deg);
        }
        55% {
            transform: translateY(-9px) rotate(-17deg);
        }
        65% {
            transform: translateY(-9px) rotate(17deg);
        }
        75% {
            transform: translateY(-9px) rotate(-17deg);
        }
        100% {
            transform: translateY(0) rotate(0);
        }
    }

    @media (max-width: 767px) {
        font-size: 36px;
        margin-left: 6px;
    }
`;

export const IntroText = styled.p`
    position: relative;
    font-size: 16px;
    line-height: 24px;
    color: ${(props) => (props.theme === true ? "#D1D5DB" : "#4B5563")};
`;

export const LocationBox = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 16px;
    gap: 10px;
    height: 35px;

    // @media (max-width: 767px) {
    //     height: 28px;
    // }
`;

export const IntroIcons = styled.img`
    width: 25px;
`;

export const MyIntroImgBox = styled.div`
    background-image: ${(props) => `url(${props.background})`};
    background-size: cover;

    // border: 1px solid red;
    width: 300px;
    height: 330px;
    position: relative;

    @media (max-width: 767px) {
        width: 296px;
        height: 275px;
        top: 70px;
    }
`;

export const MyImage = styled.img`
    position: absolute;
    top: -35px;
    left: -45px;
    width: 275px;
    height: 300px;
    border: 10px solid ${(props) => (props.theme === true ? "#030712" : "#fff")};

    @media (max-width: 767px) {
        width: 240px;
        height: 280px;
        left: 21px;
        border: 6px solid ${(props) => (props.theme === true ? "#030712" : "#fff")};
    }
`;

export const MyIntroSocialMediaIconsBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    margin-top: 20px;

    @media (max-width: 767px) {
        margin-top: 30px;
    }
`;
