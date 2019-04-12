import React from "react";
import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./styles/global";

import { Container, Wrapper } from "./styles/components";

import Routes from "./routes";

const App = () => (
    <BrowserRouter>
        <Wrapper>
            <GlobalStyle />
            <Container>
                <Routes />
            </Container>
        </Wrapper>
    </BrowserRouter>
);

export default App;
