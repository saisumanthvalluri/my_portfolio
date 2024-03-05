import styled from "styled-components";

export const AboutContainer = styled.div`
    // height: 100vh;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    padding: 90px 45px 80px 45px;
    background-color: ${(props) => (props.theme === true ? "#111827" : "#F9FAFB")};

    @media (max-width: 767px) {
        padding: 70px 15px 30px 15px;
    }

    @media (min-width: 1400px) {
        padding: 120px 17% 100px 17%;
    }
`;

export const AboutImgTextBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 50px;

    @media (max-width: 767px) {
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }
`;

export const AboutImgBox = styled.div`
    background-color: ${(props) => (props.theme === true ? "#374151" : "#E5E7EB")};
    width: 340px;
    height: 465px;
    position: relative;
    margin-top: 45px;
    align-self: flex-start;

    @media (max-width: 767px) {
        width: 310px;
        height: 305px;
        align-self: center;
    }
`;

export const AboutImg = styled.img`
    width: 350px;
    height: 450px;
    position: relative;
    left: 35px;
    bottom: 40px;
    border: 8px solid ${(props) => (props.theme === true ? "#111827" : "#F9FAFB")};

    @media (max-width: 767px) {
        height: 320px;
        width: 240px;
        left: 30px;
        border: 5px solid ${(props) => (props.theme === true ? "#111827" : "#F9FAFB")};
    }
`;

export const AboutTextBox = styled.div`
    display: flex;
    flex-direction: column;

    height: 100%;
    width: 580px;
    gap: 14px;

    @media (max-width: 767px) {
        width: 100%;
    }
`;

export const AboutTextHeading = styled.h3`
    font-size: 30px;
    font-weight: 600;
    line-height: 36px;
    letter-spacing: -2;
    margin: 0;
    color: ${(props) => (props.theme === true ? "#D1D5DB" : "#111827")};

    @media (max-width: 767px) {
        font-size: 24px;
        line-height: 32px;
    }
`;

export const AboutText = styled.h3`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    margin: 0;
    color: ${(props) => (props.theme === true ? "#D1D5DB" : "#4B5563")};
`;

export const QuickBitesList = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-left: 13px;
    gap: 10px;

    @media (max-width: 767px) {
        align-items: flex-start;
    }
`;

export const QuickBite = styled.li`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    width: 45%;
    color: ${(props) => (props.theme === true ? "#D1D5DB" : "#4B5563")};
`;
