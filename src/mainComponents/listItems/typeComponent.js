import React from 'react'
import db from '../../storage/database'
import TypeList from './typeList'

function TypeComponent(props) {

    const { types } = props
    const { manufacturer } = props
    console.log(manufacturer)

    let data = db.data.filter(x => {
        if (manufacturer === 'ALL') {
            return x
        } else {
            return x.manufacturer === manufacturer || x.manufacturer === undefined
        }
    })

    const list = types.map(x => {
        const matchComp = data.filter(y => {
            // console.log(y.manufacturer, manufacturer, y.type, x.type)
            if ( y.type === x.type) {
                return y
            } else if (x.type === 'undefined' && y.type === undefined) {
                return y
            }
            return false
        })


        return (
            <div key={x._id}>
                <TypeList type={x.type} comp={matchComp} />
            </div>
        )
    })

    return list
}

export default TypeComponent