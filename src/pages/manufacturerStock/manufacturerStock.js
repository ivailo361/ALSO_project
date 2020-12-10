import React, { Fragment, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import db  from '../../storage/database'
import TypeComponent from '../../mainComponents/listItems/typeComponent'

// import Aside from '../../mainComponents/aside/aside'
// import { Content } from '../../stylesComponents/content'

function ManufacturerStock(props) {
    const types = db.getTypesComponents()
    const { manufacturer } = useParams()
    const manNumber = db.getManufacturerFullData(manufacturer)
 
    // useEffect(() => {
    //     setTypes(getTypesComponents())
    // }, [])

    return (
        <div>
            <div>THIS IS A WAREHOUSE STOCK PER MANUFACTURER PAGE</div>
            <div>The chosen warehouse is from <b>{manufacturer || 'all'}</b></div>
            <div>
                <TypeComponent manufacturer={manNumber ? manNumber.sap : 'ALL' } types={types}/>
            </div>
        </div>

    )
}

export default ManufacturerStock