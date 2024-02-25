import styled from "styled-components";

export const BgContainer = styled.div`
    height: 100vh;
    overflow-y: auto;
    scroll-behavior: smooth !important;
    box-sizing: border-box;
    background-color: ${(props) => (props.theme === true ? "#030712" : "#fff")};

    /* Style the scrollbar */
    &::-webkit-scrollbar {
        width: 12px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${(props) => (props.theme === true ? "#424345" : "#c0c2c2")};
        border-radius: 6px;
    }

    &::-webkit-scrollbar-track {
        background-color: ${(props) => (props.theme === true ? "#747575" : "#ebeded")};
    }

    @media (max-width: 767px) {
        &::-webkit-scrollbar {
            width: 4px;
        }

        &::-webkit-scrollbar-thumb {
            border-radius: 2px;
        }
    }
`;
