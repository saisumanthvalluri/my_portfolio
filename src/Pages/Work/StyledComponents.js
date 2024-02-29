import styled from "styled-components";

export const WorkContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 45px 80px 45px;

    @media (max-width: 767px) {
        padding: 70px 15px 50px 15px;
    }

    @media (min-width: 1400px) {
        padding: 120px 15% 100px 15%;
    }
`;

export const WorkItemBox = styled.div`
    display: flex;
    flex-direction: ${(props) => props.direction};
    width: 97%;
    margin-top: 60px;
    border-radius: 12px;
    box-sizing: border-box;
    box-shadow: ${(props) =>
        props.theme === true ? "0px 10px 8px 0px rgba(0, 0, 0, 0.04)" : "0px 4px 3px 0px rgba(0, 0, 0, 0.1)"};

    @media (max-width: 767px) {
        flex-direction: column;
        width: 100%;
    }
`;

export const ProjectHomePageImgBox = styled.div`
    padding: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border-radius: ${(props) => props.borderRadius};
    width: 50%;
    background-color: ${(props) => (props.theme === true ? "#374151" : "#F9FAFB")};

    @media (max-width: 767px) {
        padding: 32px;
        width: 100%;
        border-radius: 12px 12px 0 0;
    }
`;

export const ProjectHomePageImg = styled.img`
    width: 480px;
    height: 320px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    box-shadow: 0px 20px 20px 0px #00000026;

    &:hover {
        scale: 1.1;
        transition: all 0.4s ease-in-out;
    }

    @media (max-width: 767px) {
        width: 279px;
        height: 192px;
    }

    @media (min-width: 1400px) {
        width: 100%;
        height: 100%;
    }
`;

export const ProjectDetailsBox = styled.div`
    background-color: ${(props) => (props.theme === true ? "#1F2937" : "#FFFFFF")};
    width: 50%;
    flex-grow: 1;
    border-radius: ${(props) => props.borderRadius};
    padding: 48px;
    box-sizing: border-box;

    @media (max-width: 767px) {
        padding: 32px;
        width: 100%;
        border-radius: 0 0 12px 12px;
    }
`;

export const ProjectName = styled.h3`
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    margin: 0;
    color: ${(props) => (props.theme === true ? "#F9FAFB" : "#111827")};
`;

export const AboutProject = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: ${(props) => (props.theme === true ? "#D1D5DB" : "#4B5563")};
`;

export const ProjectTechnologiesList = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
`;

export const ProjectLinkIcon = styled.img`
    width: 24px;
    padding: 6px;
    border-radius: 5px;
    margin-top: 15px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: ${(props) => (props.theme === true ? "#111827" : "#F3F4F6")};
        transition: all 0.3s ease-in-out;
    }
`;
