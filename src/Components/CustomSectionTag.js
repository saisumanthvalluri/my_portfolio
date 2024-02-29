import styled from "styled-components";

const Tag = styled.span`
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    color: ${(props) => (props.theme === true ? "#D1D5DB" : "#4B5563")};
    background-color: ${(props) => (props.theme === true ? "#374151" : "#E5E7EB")};
    padding: 4px 20px;
    border-radius: 10px;

    @media (max-width: 767px) {
        padding: 4px 20px 4px 20px;
    }
`;

const CustomSectionTag = (props) => {
    const { name, theme } = props;

    return <Tag theme={theme}>{name}</Tag>;
};

export default CustomSectionTag;
