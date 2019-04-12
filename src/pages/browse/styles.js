import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;

export const Wrapper = styled.div`
    h4 {
        opacity: 0.5;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        font-family: Montserrat;
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
    width: 100%;
`;

export const Movie = styled.div`
    display: flex;
    margin: 0 16px;
    width: 156px;
    height: 234px;

    &:first-of-type,
    &:last-of-type {
        margin: 0;
    }

    div {
        background-color: #000000;
        border-radius: 3px;
        opacity: 0;
        transition: 0.2s opacity ease;
    }

    &:hover {
        div {
            opacity: 0.5;
        }
    }
`;
