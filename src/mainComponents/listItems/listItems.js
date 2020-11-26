import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'



function ListItems(props) {
    let { nav } = props

    let links = nav.map((x, i) => {
        return (
            <li key={i}>
                <Link to={`${x.url}`}>{x.name}</Link>
            </li>
        ) 
    })
    
    return (
        <Fragment>
            {links}
        </Fragment>
    )
}

export default ListItems