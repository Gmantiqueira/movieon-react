import React from "react";

import { LogoWrapper, Container, Search, User } from "./styles";

import Logo from "../../assets/images/logo.png";
import Photo from "../../assets/images/photo.jpg";

const Header = () => (
    <Container>
        <LogoWrapper to="/">
            <img src={Logo} alt="Logotipo" />
        </LogoWrapper>

        <Search>
            <label id="search-label" htmlFor="search">
                Que filme você procura?
            </label>
            <input id="search" name="search" type="text" />
        </Search>

        <User target="_blank" to="/linkedin">
            <div>
                <img src={Photo} alt="Foto de perfil" />
            </div>
            <p>Gabriel Antiqueira</p>
        </User>
    </Container>
);

export default Header;
