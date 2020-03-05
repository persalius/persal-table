import styled from "styled-components";

export const Tr = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    background: #fff;
    border: 1px solid #e2e6e7;
    border-radius: 3px;
    transition: 0.3s all;
    margin-bottom: 10px;
    box-sizing: border-box;
    box-shadow: 0 1px 1px 1px rgba(232, 238, 243, 0.5);
    transition: 0.3s all;
    
    &:last-of-type {
        margin-bottom: 0;
    }
    
    &:hover {
        box-shadow: 0 5px 7px 1px rgba(232, 238, 243, 1);
    }
`;

export const Td = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 15px;
    transition: 0.3s all;
    
    textarea {
        width: 100%;
        resize: none;
        border: none;
        outline: none;
        background: none;
        font: 14px "Roboto", sans-serif;
        color: #535355;
    }
    
    &:hover, &:focus-within {
        //@ts-ignore
        background: ${props => ( props.isHover ? "rgba(232, 238, 243, 1)": "none")};
    }
`;

export const TdDelete = styled.div`
    width: 45px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
        
    button {
        width: 25px;
        height: 27px;
        border: none;
        outline: none;
        background: url("img/delete.svg") no-repeat center;
        background-size: 100%;
        cursor: pointer;
    }
`;

export const Th = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    color: #c6c9ce;
    box-sizing: border-box;
    padding-bottom: 10px;
`;

export const Thd = styled.div`
    flex: 1;
    padding: 0 15px;
`;
