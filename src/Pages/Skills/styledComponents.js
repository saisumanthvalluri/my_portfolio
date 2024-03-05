import styled from "styled-components";

export const SkillsContainer = styled.div`
    // height: 100vh;
    // border: 1px solid red;
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

export const SkillsList = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 70px;
    row-gap: 30px;
    padding-left: 0;
    margin-top: 40px;

    @media (max-width: 767px) {
        column-gap: 20px;
        row-gap: 30px;
        align-items: flex-start;
    }
`;

export const SkillItem = styled.div`
    width: 8%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;

    @media (max-width: 767px) {
        width: 28%;
    }
`;

export const SkillImg = styled.img`
    width: 90%;
    transition: 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        scale: 1.1;
        transition: 0.3s ease-in-out;
    }

    @media (max-width: 767px) {
        width: 70%;
    }
`;

export const SkillName = styled.p`
    font-size: 18px;
    line-height: 28px;
    font-weight: 400;
    color: ${(props) => (props.theme === true ? "#D1D5DB" : "#4B5563")};

    @media (max-width: 767px) {
        margin: 0;
        margin: 10px 0;
    }
`;
