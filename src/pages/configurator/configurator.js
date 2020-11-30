import React from 'react'
import styled from 'styled-components'

import type from '../../storage/database'
import ListItems from '../../mainComponents/listItems/listItems'


function Configurator(props) {
    console.log(props)
    // const { brand } = useParams()
    const brands = type('brand')
    return (
        <Div>
            <div>CHOOSE UP YOUR BRAND</div>
            <Nav >
                <ListItems conf='true' nav={brands} />
            </Nav>
        </Div>
    )
}

export default Configurator

const Div = styled.div`
    display: flex;
    flex-direction: column;
    width: 98%;
    border: 2px solid lightgrey; 
    border-radius: 0.3rem;  
`

const Nav = styled.nav`
    align-self: center;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 400px;
`