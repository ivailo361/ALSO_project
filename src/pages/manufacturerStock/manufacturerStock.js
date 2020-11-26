import React from 'react'
import { useParams } from 'react-router-dom'
import Aside from '../../mainComponents/aside/aside'

function ManufacturerStock() {
    const { manufacturer } = useParams()

    return (
        <div>
            <div>THIS IS A WAREHOUSE STOCK PER MANUFACTURER PAGE</div>
            <div>The chosen warehouse is from {manufacturer}</div>
            <Aside type='manufacturer' />
        </div>

    )

}

export default ManufacturerStock