import React from "react";

import { Container, Wrapper, List, Movie } from "./styles";

import Header from "../../components/Header";

const Browse = () => (
    <Container>
        <Header />

        <Wrapper>
            <h4>Tendency</h4>
            <List>
                <Movie to={`/movie`}>
                    <img
                        src="https://http2.mlstatic.com/poster-peq-imp-couche-a3-de-harry-potter-e-a-ordemvr3-D_NQ_NP_14468-MLB193619004_2122-F.jpg"
                        alt="Movie"
                    />
                    <div>
                        <h4>Harry Potter and the Half-Blood Prince</h4>
                        <p>2009</p>
                    </div>
                </Movie>
            </List>
        </Wrapper>
    </Container>
);

export default Browse;
