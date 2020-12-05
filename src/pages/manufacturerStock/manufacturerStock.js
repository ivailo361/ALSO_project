import React, { Fragment, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import db  from '../../storage/database'
// import Aside from '../../mainComponents/aside/aside'
// import { Content } from '../../stylesComponents/content'

function ManufacturerStock(props) {
    const types = db.getTypesComponents()
    const { manufacturer } = useParams()

    // useEffect(() => {
    //     setTypes(getTypesComponents())
    // }, [])

    return (
        <Fragment>
            <div>THIS IS A WAREHOUSE STOCK PER MANUFACTURER PAGE</div>
            <div>The chosen warehouse is from <b>{manufacturer || 'all'}</b></div>
            <div>{JSON.stringify(types)}</div>
        </Fragment>

    )
}

export default ManufacturerStock