import styled from "styled-components";

export const TestimonialsContainer = styled.div`
    // height: 100vh;
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

export const TestimonialsList = styled.ul`
    list-style-type: none;
    padding: 0;
    width: 90%;
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    gap: 40px;
    aspect-ratio: 3;

    @media (max-width: 767px) {
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }
`;

export const Testimonial = styled.li`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: ${(props) =>
        props.theme === true ? "0px 10px 8px 0px rgba(0, 0, 0, 0.04)" : "0px 4px 3px 0px rgba(0, 0, 0, 0.1)"};
    border-radius: 12px;
    background-color: ${(props) => (props.theme === true ? "#1F2937" : "#FFFFFF")};
    padding: 48px;
    row-gap: 15px;
`;

export const AvatarBox = styled.div`
    height: 64px;
    width: 64px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // background-color: ${(props) => (props.theme === true ? "#9CA3AF" : "#9CA3AF")};
    background-color: #9ca3af;
`;

export const TestimonialImage = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50%;
`;

export const Description = styled.p`
    font-size: 16px;
    line-height: 24px;
    font-weght: 400;
    color: ${(props) => (props.theme === true ? "#D1D5DB" : "#4B5563")};
`;

export const Name = styled.h3`
    color: ${(props) => (props.theme === true ? "#F9FAFB" : "#111827")};
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    margin: 0;
    margin-top: auto;
`;

export const Specilization = styled.p`
    color: ${(props) => (props.theme === true ? "#D1D5DB" : "#4B5563")};
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    margin: 0;

    @media (max-width: 767px) {
        font-weight: 400;
    }
`;
