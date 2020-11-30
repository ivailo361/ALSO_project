import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
// import Aside from '../../mainComponents/aside/aside'
// import { Content } from '../../stylesComponents/content'

function ManufacturerStock(props) {
    const { manufacturer } = useParams()
    console.log(manufacturer)
    return (
        <Fragment>
            <div>THIS IS A WAREHOUSE STOCK PER MANUFACTURER PAGE</div>
            <div>The chosen warehouse is from <b>{manufacturer || 'all'}</b></div>
        </Fragment>

    )
}

export default ManufacturerStock