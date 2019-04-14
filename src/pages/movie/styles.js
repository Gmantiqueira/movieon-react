import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    max-height: 100%;
    width: 100%;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
`;

export const Poster = styled.div`
    img {
        max-height: 100vh;
        width: auto;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    position: relative;

    padding: 32px 48px;
`;

export const Close = styled(Link)`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;

    position: absolute;
    right: 32px;
    top: 36px;

    height: 24px;

    p,
    span {
        margin-left: 16px;

        opacity: 0.75;
        font-size: 14px;
        font-weight: 500;
        line-height: 1.14;
        color: #ffffff;
    }

    span {
        font-weight: bold;
        opacity: 1;
    }
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 36px;

    h2 {
        margin-bottom: 8px;

        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        font-size: 36px;
        font-weight: 800;
        color: #ffffff;
    }

    p {
        margin-bottom: 16px;

        opacity: 0.75;
        font-size: 14px;
        font-weight: 500;
        line-height: 1.14;
        color: #ffffff;
    }

    div {
        max-height: 24px;

        display: flex;
        flex-wrap: wrap;

        align-items: center;
        img {
            height: 24px;
            width: 24px;
        }

        p {
            font-size: 16px;

            margin: 0;
            margin-left: 16px;
        }
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;

    h4 {
        margin-bottom: 16px;

        opacity: 0.5;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        font-size: 20px;
        font-weight: 600;
        color: #ffffff;
    }

    p {
        display: block;

        opacity: 0.75;
        font-size: 14px;
        font-weight: 500;
        line-height: 1.71;
        color: #ffffff;
    }
`;
