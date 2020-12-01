
const type = (type) => {
    const links = {
        manufacturer: ['Fujitsu', 'HPE', 'DELL', 'Lenovo', 'ALL'],
        // manufacturer: [
        //     { name: 'Fujitsu', url: '/stock/fujitsu' },
        //     { name: 'HPE', url: '/stock/hpe' },
        //     { name: 'DELL', url: '/stock/dell' },
        //     { name: 'Lenovo', url: '/stock/lenovo' },
        //     { name: 'ALL', url: 'stock/all'}
        // ],
        brand: [ 'Fujitsu', 'HPE', 'DELL', 'Lenovo',
            // { name: 'Fujitsu', url: '/configurator/fujitsu' },
            // { name: 'HPE', url: '/configurator/hpe' },
            // { name: 'DELL', url: '/configurator/dell' },
            // { name: 'Lenovo', url: '/configurator/lenovo' },
        ],

        fujitsu: [ 'TX1330', 'RX2530', 'RX2540', 'ALL'
            // { name: 'TX1330', url: '/configurator/fujitsu/tx1330' },
            // { name: 'RX2530', url: '/configurator/fujitsu/rx2530' },
            // { name: 'RX2540', url: '/configurator/fujitsu/rx2540' },
            // { name: 'ALL', url: '/configurator/fujitsu/all' },
        ],
        hpe: [ 'DL160', 'ML350', 'ALL'
            // { name: 'DL160', url: '/configurator/hpe/dl160' },
            // { name: 'ML350', url: '/configurator/hpe/ml350' },
            // { name: 'ALL', url: '/configurator/hpe/all' },
        ]
    }
    return links[type]
}

export default type