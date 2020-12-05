import React, { Fragment, useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import Aside from '../../mainComponents/aside/aside'
import { Content } from '../../stylesComponents/content'
import ManufacturerPage from '../../pages/manufacturerStock/manufacturerStock'
import { getData } from '../../models/fetcher' 

// import { useLocation } from 'react-router-dom'


function StockPage() {

    let { path } = useRouteMatch();

    // useEffect(() => {
    //     getData('/api/stock').then((res) => {
    //         console.log(res)
    //         // sessionStorage.setItem('postList', JSON.stringify(res));
    //     }).catch(e => console.error(e))
    // }, [])



    return (
        <Fragment>
            <Aside type='manufacturer' />
            <Content>
                <Switch>
                    <Route exact path={path} component={ManufacturerPage}/>
                    <Route path={`${path}/:manufacturer`} component={ManufacturerPage} />
                </Switch>
            </Content>
        </Fragment>
    )
}

export default StockPage
