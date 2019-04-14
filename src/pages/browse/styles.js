import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 0 32px;
`;

export const Wrapper = styled.div`
    h4 {
        opacity: 0.5;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        font-size: 20px;
        font-weight: 600;
        color: #ffffff;

        margin-top: 32px;
    }
`;

export const List = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
    width: 100%;
`;

export const Movie = styled(Link)`
    display: flex;
    height: 234px;
    margin: 0 16px;
    width: 156px;

    position: relative;

    &:first-of-type,
    &:last-of-type {
        margin: 0;
    }

    img {
        height: 100%;
        width: auto;
    }

    div {
        border-radius: 3px;
        opacity: 0;
        height: 100%;
        width: 100%;

        padding: 16px;

        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        position: absolute;
        top: 0;
        left: 0;

        transition: 0.2s opacity ease;

        h4,
        p {
            color: #ffffff;
            margin-top: 8px;
            opacity: 1;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
            z-index: 1;
        }

        h4 {
            font-size: 16px;
            font-weight: bold;
            line-height: 1.25;
        }

        p {
            font-size: 12px;
            font-weight: 500;
        }

        &:after {
            content: "";
            background-color: #000000;
            opacity: 0;

            position: absolute;
            top: 0;
            left: 0;

            height: 100%;
            width: 100%;
            transition: 0.2s opacity ease;
        }
    }

    &:hover {
        div {
            opacity: 1;
            &:after {
                opacity: 0.5;
            }
        }
    }
`;
