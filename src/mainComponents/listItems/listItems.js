import React, { Fragment, useState } from 'react'
import { Li, StyledLink } from '../../stylesComponents/li'
import { useRouteMatch } from 'react-router-dom'




function ListItems(props) {
    const [value, setValue] = useState('')
    const { url } = useRouteMatch()
    // let model = pathname.match(/[a-zA-Z\d]+$/) || ""

    const { nav, conf, theme } = props

    const path = url === '/' ? "" : url

    const links = nav.map((x, i) => {
        return (
            <Li key={i}>
                <StyledLink to={`${path}/${x.toLowerCase()}`}
                    conf={conf}
                    theme={theme || x}
                    marked={value === i ? (theme || x) : ''}
                    onClick={(e) => {
                        setValue(i)
                        // e.target.setAttribute('marked', true)
                    }}>
                    {x}
                </StyledLink>
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
