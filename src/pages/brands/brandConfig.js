import React, { Fragment } from 'react'
import { useParams, useRouteMatch } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import Aside from '../../mainComponents/aside/aside'
import { Content } from '../../stylesComponents/content'
import ServerModel from '../../mainComponents/serverModel/serverModel'
import db from '../../storage/database' 

function Brands(props) {
    const { brand } = useParams()
    let { path } = useRouteMatch();
    return (
        <Fragment>
            <Aside list={db.getModels(brand)} theme={brand} />
            <Content>
                <Switch>
                    <Route exact path={path} component={ServerModel} />
                    <Route path={`${path}/:model`} component={ServerModel} />
                </Switch>
            </Content>
        </Fragment>
    )
}

export default Brands