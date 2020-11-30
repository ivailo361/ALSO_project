import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'


function ServerModel() {
    const { model } = useParams()
    return (
        <Fragment>
            <h1>THIS IS A MANUFACTURER CONFIGURATOR PAGEE</h1>
            <div>Server model: <b>{model || 'all'}</b></div>
        </Fragment>
    )
}

export default ServerModel