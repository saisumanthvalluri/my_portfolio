import styled from "styled-components";

export const ExperienceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 45px 80px 45px;
    background-color: ${(props) => (props.theme === true ? "#111827" : "#F9FAFB")};

    @media (max-width: 767px) {
        padding: 70px 15px 60px 15px;
    }
`;

export const ExperienceCard = styled.div`
    background-color: ${(props) => (props.theme === true ? "#1F2937" : "#FFFFFF")};
    box-shadow: ${(props) =>
        props.theme === true ? "0px 10px 8px 0px rgba(0, 0, 0, 0.04)" : "0px 4px 3px 0px rgba(0, 0, 0, 0.1)"};
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 32px;
    width: 75%;
    border-radius: 12px;
    margin-top: 50px;

    @media (max-width: 767px) {
        width: 80%;
        flex-direction: column-reverse;
        gap: 15px;
    }
`;

export const CompanyLogo = styled.img`
    width: 170px;
    // border: 1px solid red;
    margin: 0;

    @media (max-width: 767px) {
        order: 1;
    }
`;

export const ExpDescriptionBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;

    @media (max-width: 767px) {
        width: 100%;
    }
`;

export const Specialization = styled.p`
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    color: ${(props) => (props.theme === true ? "#F9FAFB" : "#111827")};
    margin: 0;
`;

export const SpecializationPointsList = styled.ul`
    padding-left: 0;

    @media (max-width: 767px) {
        padding-left: 25px;
    }
`;

export const SpecializationPoint = styled.li`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: ${(props) => (props.theme === true ? "#D1D5DB" : "#4B5563")};
    margin: 0;
`;

export const TimePeriod = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: ${(props) => (props.theme === true ? "#E5E7EB" : "#374151")};
    margin: 0;

    @media (max-width: 767px) {
        order: 0;
    }
`;
