import React, { Fragment } from 'react'
import { Li, StyledLink } from '../../stylesComponents/li'



function ListItems(props) {
    let { nav, conf } = props
  
    let links = nav.map((x, i) => {
        return (
            <Li key={i}>
                <StyledLink to={`${x.url}`} conf={conf} theme={x.name} >{x.name}</StyledLink>
            </Li>
        )
    })

    return (
        <Fragment>
            {links}
        </Fragment>
    )
}

export default ListItems
