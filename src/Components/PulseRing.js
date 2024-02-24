import styled from "styled-components";

const RingContainer = styled.div`
    position: relative;
    top: -19px;I
`;

const Ring = styled.div`
    border: 6px solid #10b981;
    -webkit-border-radius: 30px;
    height: 12px;
    width: 12px;
    position: absolute;
    left: 0px;
    top: 10px;
    -webkit-animation: pulsate 1s ease-out;
    -webkit-animation-iteration-count: infinite;
    opacity: 0;

    @-webkit-keyframes pulsate {
        0% {
            -webkit-transform: scale(0.1, 0.1);
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            -webkit-transform: scale(1.2, 1.2);
            opacity: 0;
        }
    }

    @media (max-width: 767px) {
        top: 7px;
    }
`;

const Circle = styled.div`
    width: 12px;
    height: 12px;
    background-color: #10b981;
    border-radius: 50%;
    position: absolute;
    top: 16px;
    left: 6px;

    @media (max-width: 767px) {
        top: 13px;
    }
`;

export const PulseRing = () => (
    <RingContainer>
        <Ring></Ring>
        <Circle></Circle>
    </RingContainer>
);
