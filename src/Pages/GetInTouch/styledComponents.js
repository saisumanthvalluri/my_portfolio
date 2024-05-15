import styled from "styled-components";

export const GetInTouchContainer = styled.div`
    // height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 45px 80px 45px;

    @media (max-width: 767px) {
        padding: 70px 15px 50px 15px;
    }

    @media (min-width: 1400px) {
        padding: 120px 17% 100px 17%;
    }
`;

export const ContactItems = styled.ul`
    list-style-type: none;
    padding: 0;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    @media (max-width: 767px) {
        margin-top: 30px;
    }
`;

export const ContactItemBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    // margin-top: 50px;
    // border: 1px solid red;

    :first-child {
        align-self: flex-end;

        @media (max-width: 767px) {
            align-self: center;
        }
    }

    @media (max-width: 767px) {
        gap: 8px;
    }
`;

export const ContactItemText = styled.span`
    font-size: 36px;
    line-height: 40px;
    letter-spacing: "-2%";
    font-weight: 600;
    color: ${(props) => (props.theme === true ? "#D1D5DB" : "#4B5563")};

    @media (max-width: 767px) {
        font-size: 18px;
        line-height: 28px;
    }
`;

export const OtherContactText = styled.span`
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    margin-top: 30px;
    color: ${(props) => (props.theme === true ? "#D1D5DB" : "#4B5563")};
`;

export const MyIntroSocialMediaIconsBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    margin-top: 20px;

    @media (max-width: 767px) {
        margin-top: 10px;
    }
`;
