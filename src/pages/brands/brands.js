import React from 'react'
import { useParams } from 'react-router-dom'
import Aside from '../../mainComponents/aside/aside'

function Brands() {
    const { brand } = useParams()
    return (
        <div>
            <div>THIS IS A MANUFACTURER CONFIGURATOR PAGE</div>
            <Aside type={brand} />
        </div>

    )
}

export default Brands