import React, { Fragment } from 'react'
import Aside from '../../mainComponents/aside/aside'
import { Content } from '../../stylesComponents/content'

function StockPage() {

    return (
        <Fragment>
            <Aside type='manufacturer'/>
            <Content>IT is a Home page</Content>
        </Fragment>
    )
}

export default StockPage
