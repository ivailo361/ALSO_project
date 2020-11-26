import React from 'react'
import Aside from '../../mainComponents/aside/aside'


function Configurator(props) {
    console.log(props)
    // const { brand } = useParams()

    return (
        <div>
            <div>PICK UP YOUR BRAND</div>
            <Aside type='brand' />
        </div>
    )
}

export default Configurator