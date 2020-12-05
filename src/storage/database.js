function setManufacturerList(list) {
    let manList = {}
    list.forEach(x => {
        if (!manList[x.name])
        manList[x.name] = x.models
    });
    links.manufacturer = manList
    return manList
}

function getManufacturerList() {
    return [...Object.keys(links.manufacturer), 'ALL']
}

function getManufacturerConfigList() {
    return Object.keys(links.manufacturer)
}

function getModels(brand) {
    // let upperCaseBrand = brand.split('')
    // upperCaseBrand[0] = upperCaseBrand[0].toUpperCase()
    // console.log(upperCaseBrand.join(''))
    let models = links.manufacturer[brand].concat('ALL')

    return models
}

function setTypesComponents(list) {
    let types = list.map(x => x.type)
    links.types = types
    return types
}

function getTypesComponents() {
    return links.types
}

let links = {
    manufacturer: {},
    types: [],
}

// const type = (type) => {
//     const links = {

//         manufacturer: ['Fujitsu', 'HPE', 'DELL', 'Lenovo', 'ALL'],
//         // manufacturer: [
//         //     { name: 'Fujitsu', url: '/stock/fujitsu' },
//         //     { name: 'HPE', url: '/stock/hpe' },
//         //     { name: 'DELL', url: '/stock/dell' },
//         //     { name: 'Lenovo', url: '/stock/lenovo' },
//         //     { name: 'ALL', url: 'stock/all'}
//         // ],
//         brand: ['Fujitsu', 'HPE', 'DELL', 'Lenovo',
//             // { name: 'Fujitsu', url: '/configurator/fujitsu' },
//             // { name: 'HPE', url: '/configurator/hpe' },
//             // { name: 'DELL', url: '/configurator/dell' },
//             // { name: 'Lenovo', url: '/configurator/lenovo' },
//         ],

//         fujitsu: ['TX1330', 'RX2530', 'RX2540', 'ALL'
//             // { name: 'TX1330', url: '/configurator/fujitsu/tx1330' },
//             // { name: 'RX2530', url: '/configurator/fujitsu/rx2530' },
//             // { name: 'RX2540', url: '/configurator/fujitsu/rx2540' },
//             // { name: 'ALL', url: '/configurator/fujitsu/all' },
//         ],
//         hpe: ['DL160', 'ML350', 'ALL'
//             // { name: 'DL160', url: '/configurator/hpe/dl160' },
//             // { name: 'ML350', url: '/configurator/hpe/ml350' },
//             // { name: 'ALL', url: '/configurator/hpe/all' },
//         ]
//     }
//     return links[type]
// }

// export default type

const db = {
    setManufacturerList,
    getManufacturerList,
    getManufacturerConfigList,
    getModels,
    setTypesComponents,
    getTypesComponents
}

export default db