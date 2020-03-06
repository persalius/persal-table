import React from "react";
import styled, {keyframes} from "styled-components";

const rotate = keyframes`
    0% { transform: rotate(0) }
    100% { transform: rotate(360deg) }
`;

const Wrapper = styled.div`
    height: 39px;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
`;

const Loading = styled.div`
    width: 39px;
    height: 39px;
    box-sizing: border-box;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    backface-visibility: hidden;
    transform-origin: 0 0;
    
    &>div {
        position: absolute;
        width: 30px;
        height: 30px;
        top: 0;
        left: 0;
        border-radius: 50%;
        border: 4px solid #000;
        border-color: #56a3f5 transparent #56a3f5 transparent;
        animation: ${rotate} 1.85s linear infinite;
        box-sizing: content-box;
    }
    &>div:nth-child(2) { border-color: transparent }
    &>div:nth-child(2) div {
        position: absolute;
        width: 100%;
        height: 100%;
        transform: rotate(45deg);
    }
    &>div:nth-child(2) div:before, &>div:nth-child(2) div:after {
        content: "";
        display: block;
        position: absolute;
        width: 4px;
        height: 4px;
        top: -4px;
        left: 22px;
        background: #56a3f5;
        border-radius: 50%;
        box-shadow: 0 52px 0 0 #56a3f5;
    }
    &>div:nth-child(2) div:after {
        left: -4px;
        top: 22px;
        box-shadow: 52px 0 0 0 #56a3f5;
    }
`;


const Preloader = () => {
    return (
        <Wrapper>
            <Loading>
                <div></div><div></div>
            </Loading>
        </Wrapper>
    );
};

export default Preloader;
