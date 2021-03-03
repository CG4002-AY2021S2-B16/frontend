import React from 'react';
import styled from 'styled-components';

import colours from '../../colours';
import logo from '../../streamteam_header.png';
import icon from '../../profile.png';

const Head = styled.div`
    text-align: center;
    display: grid;
    grid-area: header;
    grid-template-areas: 
        'logo blank user';
    grid-template-columns: 200px 1fr 200px;
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
    grid-template-areas: 'name icon';
    grid-template-columns: 3fr 1fr;
    height: 100%;
    margin: 10px;
`

const Name = styled.div`
    grid-area: name;
    text-align: right;
    vertical-align: middle;
    line-height: 80px;
    font-size: 18px;
    color: ${colours.lightBlue}
`

const UserLogo = styled.img`
    display: grid;
    grid-area: icon;
    width: 50px;
    margin: 15px;
`

const Header = () => (
    <Head>
        <Logo src={logo} alt="logo" />
        <User>
            <Name>Hey Jessie!</Name>
            <UserLogo src={icon} alt="user icon"/>
        </User>
    </Head>
)

export default Header;