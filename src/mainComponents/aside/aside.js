import React from 'react'
import ListItems from '../listItems/listItems'
import styled from 'styled-components';
import type from '../../storage/database'

// const type = (type) => {
//     const links = {
//         manufacturer: [
//             { name: 'Fujitsu', url: '/stock/fujitsu' },
//             { name: 'HPE', url: '/stock/hpe' },
//             { name: 'DELL', url: '/stock/dell' },
//             { name: 'Lenovo', url: '/stock/lenovo' },
//         ],
//         brand: [
//             { name: 'Fujitsu', url: '/configurator/fujitsu' },
//             { name: 'HPE', url: '/configurator/hpe' },
//             { name: 'DELL', url: '/configurator/dell' },
//             { name: 'Lenovo', url: '/configurator/lenovo' },
//         ],

//         fujitsu: [
//             { name: 'TX1330', url: '/configurator/fujitsu/tx1330' },
//             { name: 'RX2530', url: '/configurator/fujitsu/rx2530' },
//             { name: 'RX2540', url: '/configurator/fujitsu/rx2540' },
//         ],
//         hpe: [
//             { name: 'DL160', url: '/configurator/hpe/dl160' },
//             { name: 'ML350', url: '/configurator/hpe/ml350' },
//         ]
//     }
//     return links[type]
// }


function Aside(props) {
    return (
        <AsideComp>
            <Nav >
                <ListItems nav={type(props.type)} />
            </Nav>
        </AsideComp>
    )
}

export default Aside

const AsideComp = styled.div`
    flex-basis: 10%;
    border: 2px solid lightgrey; 
    border-radius: 0.3rem;
`
const Nav = styled.nav`
    margin: 1.5rem 0.5rem 0.5rem 0.5rem;
    height: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;

`