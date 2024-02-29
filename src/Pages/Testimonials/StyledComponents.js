import styled from "styled-components";

export const TestimonialsContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 45px 80px 45px;
    background-color: ${(props) => (props.theme === true ? "#111827" : "#F9FAFB")};

    @media (max-width: 767px) {
        padding: 70px 15px 50px 15px;
    }

    @media (min-width: 1400px) {
        padding: 120px 15% 100px 15%;
    }
`;
