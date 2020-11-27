import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import Aside from '../../mainComponents/aside/aside'
import { Content } from '../../stylesComponents/content'

function ManufacturerStock() {
    const { manufacturer } = useParams()

    return (
        <Fragment>
            <Aside type='manufacturer' />
            <Content>
                <div>THIS IS A WAREHOUSE STOCK PER MANUFACTURER PAGE</div>
                <div>The chosen warehouse is from <b>{manufacturer}</b></div>
            </Content>
        </Fragment>

    )

}

export default ManufacturerStock