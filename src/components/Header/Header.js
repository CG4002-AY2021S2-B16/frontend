import React from 'react';
import styled from 'styled-components';

import colours from '../../colours';
import logo from '../../streamteam_header.png';

const Head = styled.div`
    text-align: center;
    display: grid;
    grid-area: header;
    grid-template-areas: 
        'logo blank';
    grid-template-columns: 200px 1fr;
    background: ${colours.darkBlue};
`

const Logo = styled.img`
    display: grid;
    grid-area: logo;
    height: 100%;
    width: 200px;
`

const User = styled.div`
    display: grid;
    grid-area: user;
    margin: 10px;
    text-align: right;
    vertical-align: middle;
    height: 100%;
`

const Header = () => (
    <Head>
        <Logo src={logo} alt="logo" />
        {/* <User>Hey Jessie</User> */}
    </Head>
)

export default Header;