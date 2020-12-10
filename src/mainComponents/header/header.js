import React from 'react'
import { Link } from 'react-router-dom'
import ListItems from '../listItems/navigation'
import styled from 'styled-components';

const headerList = (loggedIn) => {
    const guest = [ 'Stock', 'Configurator', 'Register', 'Login',
        // { name: 'Stock', url: '/stock' },
        // { name: 'Configurator', url: '/configurator' },
        // { name: 'Register', url: '/register'},
        // { name: 'Login', url: '/login'},
      ]

      const user = [ 'Stock', 'Configurator', 'Add category', 'Edit material', 'Login',
        // { name: 'Stock', url: '/stock' },
        // { name: 'Configurator', url: '/configurator' },
        // { name: 'Add category', url: '/addCategory'},
        // { name: 'Edit material', url: '/editMaterial'},
        // { name: 'Logout', url: '/logout'}
    ]

    return loggedIn ? user : guest 
}

function Header() {

        return (
            <HeaderDiv>
                <Link to='/'>
                    <Img src="ALSO-Holding-AG.png" /*width="80" height="80" style={{ color: "black", filter: "invert(100%) sepia(0%) saturate(0%) hue-rotate(360deg) brightness(102%) contrast(102%)" }} */alt=""></Img>
                </Link>
                <Nav >
                    <ListItems nav={headerList()} />
                </Nav>
            </HeaderDiv>
        )
    }

export default Header


const HeaderDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 98%;
    margin: auto;
    height: auto;
    border: 2px solid lightgrey;
    border-radius: 0.3rem;
    background-color: #99e087;
`
const Nav = styled.nav`
    display: flex;
    align-items: center;
`
const Img = styled.img`
    display: inline-block;
    height: 100%;
`
