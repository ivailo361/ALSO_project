import React, { Fragment, useEffect, useState } from 'react'
import styled from 'styled-components';
import { useHistory  } from 'react-router-dom'

function TypeList(props) {
    const [showContent, setShowContent] = useState(true)
    const history = useHistory();

    const { comp, type } = props

    const listComp = comp.map((x, index) => {
        return (
            <nav key={x._id}>
                    <Li>{x.sapNum}</Li>
                    <Li>{x.manNum}</Li>
                    <Li>{x.description}</Li>
                    <Li>{x.qty}</Li>
                    <Li>{x.price}</Li>
                    <button onClick={() => history.push(`/editComponent/${x._id}`)}>Edit</button>
            </nav>
        )
    })
    return (
        <Fragment>
            <button onClick={() => setShowContent(!showContent)}>{type}</button>
            {showContent === true ? listComp : null}
        </Fragment>
    )
}

const Li = styled.li`
    list-style-type: none;
    text-decoration: none;
`

export default TypeList