import React from 'react';
import styled from 'styled-components';

import colours from '../../colours';
import logo from '../../streamteam_header.png';

const Head = styled.div`
    text-align: center;
    display: grid;
    grid-template-areas: 
        'logo blank';
    grid-template-columns: 200px auto;
    background: ${colours.dullBlue};
`

const Logo = styled.img`
    display: grid;
    grid-area: "logo";
    height: 100%;
`

const Header = () => (
    <Head>
        <Logo src={logo} alt="logo" />
    </Head>
)

export default Header;