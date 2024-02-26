import styled from "styled-components";

export const Caption = styled.h5`
    color: ${(props) => (props.theme === true ? "#D1D5DB" : "#4B5563")};
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    margin: 0;
    margin-top: 20px;

    @media (max-width: 767px) {
        text-align: center;
    }
`;

const CustomSectionCaption = (props) => {
    const { theme, text } = props;
    return <Caption theme={theme}>{text}</Caption>;
};

export default CustomSectionCaption;
