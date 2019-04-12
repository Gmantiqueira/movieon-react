import React from "react";

import { Container, Wrapper, List, Movie } from "./styles";

import Header from "../../components/Header";

const Browse = () => (
    <Container>
        <Header />

        <Wrapper>
            <h4>Tendency</h4>
            <List>
                <Movie>
                    <img src="" />
                    <div>
                        <h4>Harry Potter and the Half-Blood Prince</h4>
                        <p></p>
                    </div>
                </Movie>
            </List>
        </Wrapper>
    </Container>
);

export default Browse;
