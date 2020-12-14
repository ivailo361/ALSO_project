import React, { useEffect, useState } from 'react'
import db from '../../storage/database'
import TypeList from './typeList'
import { getData } from '../../models/fetcher'
import { Block } from '../../stylesComponents/block'
import styled from 'styled-components'

function TypeComponent(props) {
    const [error, setError] = useState(null)
    const [data, setData] = useState(db.getComponentsData())

    const { types } = props
    const { manufacturer } = props
    console.log(db.getComponentsData())

    useEffect(() => {
        if (data.length === 0) {
            getData('/api/edit')
                .then((res) => {
                    console.log(res)
                    db.setComponentsData(res)
                    setData(res)
                })
                .catch(e => setError(e.message))
        } 
    }, [data.length])


    let dataDB = data.filter(x => {
        if (manufacturer === 'ALL') {
            return x
        } else {
            return x.manufacturer.toString() === manufacturer || x.manufacturer.toString() === undefined
        }
    })

    const list = types.map(x => {
        const matchComp = dataDB.filter(y => {
            // console.log(y.manufacturer, manufacturer, y.type, x.type)
            if (y.type === x.type) {
                return y
            } else if (x.type === 'undefined' && y.type === undefined) {
                return y
            }
            return false
        })


        return (
            <Block key={x._id}>
                <TypeList type={x.type} comp={matchComp} />
            </Block>
        )
    })

    return list
}

export default TypeComponent