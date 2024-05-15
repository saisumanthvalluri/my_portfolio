import styled from "styled-components";

export const FooterContainer = styled.div`
    // height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    // padding: 10px;
    background-color: ${(props) => (props.theme === true ? "#111827" : "#F9FAFB")};

    @media (max-width: 767px) {
        padding: 15px;
    }

    @media (min-width: 1400px) {
        padding: 20px;
    }
`;

export const FooterText = styled.div`
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    display: flex;
    align-items: center;
    gap: 6px;
    color: ${(props) => (props.theme === true ? "#D1D5DB" : "#4B5563")};

    :nth-child(2) {
        margin-top: 5px;
    }
`;
