import React from 'react'
import ListItems from '../listItems/listItems'

const type = (type) => {
    const links = {
        manufacturer: [
            { name: 'Fujitsu', url: '/stock/fujitsu' },
            { name: 'HPE', url: '/stock/hpe' },
            { name: 'DELL', url: '/stock/dell' },
            { name: 'Lenovo', url: '/stock/lenovo' },
        ],
        brand: [
            { name: 'Fujitsu', url: '/configurator/fujitsu' },
            { name: 'HPE', url: '/configurator/hpe' },
            { name: 'DELL', url: '/configurator/dell' },
            { name: 'Lenovo', url: '/configurator/lenovo' },
        ],

        fujitsu: [
            { name: 'TX1330', url: '/configurator/fujitsu/tx1330' },
            { name: 'RX2530', url: '/configurator/fujitsu/rx2530' },
            { name: 'RX2540', url: '/configurator/fujitsu/rx2540' },
        ],
        hpe: [
            { name: 'DL160', url: '/configurator/hpe/dl160' },
            { name: 'ML350', url: '/configurator/hpe/ml350' },
        ]
    }
    return links[type]
}


function Aside(props) {
    return (
        <div>
            <nav >
                <ListItems nav={type(props.type)} />
            </nav>
        </div>
    )
}

export default Aside