import React, { useState }from 'react'
import db from '../../storage/database'

function PartDetails(props) {
    const types = db.getTypesComponents()
    const [selectType, setSelectType] = useState('Server')
    let { part } = props


    

    return(
        <div>{part.manNum}</div>
    )
}

export default PartDetails