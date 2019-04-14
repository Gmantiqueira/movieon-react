import React from "react";

import { Container, Close, Poster, Wrapper, Header, Info } from "./styles";

import Star from "../../assets/images/star.png";

const MovieInfo = () => (
    <Container>
        <Poster>
            <img
                src="https://http2.mlstatic.com/poster-peq-imp-couche-a3-de-harry-potter-e-a-ordemvr3-D_NQ_NP_14468-MLB193619004_2122-F.jpg"
                alt="Movie"
            />
        </Poster>

        <Wrapper>
            <Close to="/">
                <span>X</span>
                <p>Voltar</p>
            </Close>

            <Header>
                <h2>Harry Potter and the Half-Blood Prince</h2>

                <p>2017 | 107 min | Ficção, Ação, Drama</p>

                <div>
                    <img src={Star} alt="Star" />
                    <img src={Star} alt="Star" />
                    <img src={Star} alt="Star" />
                    <img src={Star} alt="Star" />
                    <img src={Star} alt="Star" />

                    <p>8.8 / 10</p>
                </div>
            </Header>

            <Info>
                <h4>Sinopse</h4>

                <p>
                    Num mundo pós 2029, cérebros se fundem facilmente a
                    computadores e a tecnologia está em todos os lugares. Motoko
                    Kusanagi é uma ciborgue com experiência militar que comanda
                    um esquadrão de elite especializado em combater crimes
                    cibernéticos.
                </p>
            </Info>
        </Wrapper>
    </Container>
);

export default MovieInfo;
