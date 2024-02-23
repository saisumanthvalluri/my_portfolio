import styled from "styled-components";

export const BgContainer = styled.div`
    height: 100vh;
    // border: 1px solid red;

    // background-image: url("https://res.cloudinary.com/duzlefgz6/image/upload/v1689080438/1600w-vJDFhbySuuU-PhotoRoom_by7wvc.jpg");
    // background-size: cover;
    background-color: ${(props) => (props.theme === true ? "#111827" : "#fff")};
`;
