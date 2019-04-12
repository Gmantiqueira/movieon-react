import styled from "styled-components";
import { Link } from "react-router-dom";

export const LogoWrapper = styled(Link)`
    display: flex;
    height: 100%;
    width: auto;
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 32px;
    height: 32px;
    width: 100%;
`;

export const Search = styled.div`
    position: relative;
    width: 288px;

    label {
        position: absolute;
        left: 16px;
        top: 8px;

        opacity: 0.5;
        font-family: Montserrat;
        font-size: 12px;
        font-weight: 500;
        font-style: italic;
        line-height: 1.33;
    }

    input {
        background-color: rgba(255, 255, 255, 0.15);
        border: none;
        outline: none;

        border-radius: 16px;
        padding: 8px 16px;
        width: 100%;

        position: absolute;
        top: 0;
        left: 0;
    }
`;

export const User = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #fff;
    div {
        height: 32px;
        width: 32px;
        img {
            border-radius: 50%;
            width: 100%;
            height: auto;
        }
    }
    p {
        margin-left: 8px;
        opacity: 0.75;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
        font-family: Montserrat;
        font-size: 12px;
    }
`;
