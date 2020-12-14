function setManufacturerList(list) {
    // let manList = {}
    // list.forEach(x => {
    //     if (!manList[x.name])
    //         manList[x.name] = x.models
    // });
    // links.manufacturer = manList
    // return manList
    links.manufacturer = list

}

function getManufacturerList() {
    let names = links.manufacturer.map(x => x.name)
    return [...names, 'ALL']
}

function getManufacturerConfigList() {
    return links.manufacturer.map(x => x.name)
}

function getManufacturerFullData(manufacturer) {
    let producer = links.manufacturer.find(x => x.name === manufacturer)

    return producer
}

function getModels(brand) {
    // let upperCaseBrand = brand.split('')
    // upperCaseBrand[0] = upperCaseBrand[0].toUpperCase()
    // console.log(upperCaseBrand.join(''))
    let producer = links.manufacturer.find(x => x.name === brand)
    let models = producer.models.concat('ALL')
    return models
}

function setTypesComponents(list) {
    // let types = list.map(x => x.type)
    links.types = list
    return list
}

function getTypesComponents() {
    return links.types
}

let links = {
    manufacturer: [],
    // manufacturer: {},
    types: [],
}

function setComponentsData(mongoData) {
    data = mongoData
}

function getComponentsData() {
    return data
}

let data = [
    // {
    //     _id: 'oir94939i3t93t8',
    //     sapNum: '3904958',
    //     manNum: 's43567-2335-6667',
    //     description: "lorem ipsum aves mitos non the frande",
    //     manufacturer: '80001310',
    //     type: 'Memory',
    //     compatibleSrv: ['RX1330', 'RX2520', 'RX2530', 'RX2540'],
    //     qty: '3',
    //     price: '109'
    // },
    // {
    //     _id: 'oir94939i3t95t8',
    //     sapNum: '3904958',
    //     manNum: 's43567-2335-6667',
    //     description: "lorem ipsum aves mitos non the frande",
    //     manufacturer: '80001310',
    //     type: 'Memory',
    //     compatibleSrv: ['RX1330', 'RX2520', 'RX2530', 'RX2540'],
    //     qty: '3',
    //     price: '109'
    // },
    // {
    //     _id: 'oir94939i3t99t8',
    //     sapNum: '3904958',
    //     manNum: 's43567-2335-6667',
    //     description: "lorem ipsum aves mitos non the frande",
    //     manufacturer: '80033864',
    //     type: 'Memory',
    //     compatibleSrv: ['RX1330', 'RX2520', 'RX2530', 'RX2540'],
    //     qty: '3',
    //     price: '109'
    // },
    // {
    //     _id: 'oir94939i2t93t8',
    //     sapNum: '3904958',
    //     manNum: 's43567-2335-6667',
    //     description: "lorem ipsum aves mitos non the frande",
    //     manufacturer: '80001310',
    //     type: 'Server',
    //     compatibleSrv: ['RX1330', 'RX2520', 'RX2530', 'RX2540'],
    //     qty: '3',
    //     price: '109'
    // },
    // {
    //     _id: 'oir94939i3tpot8',
    //     sapNum: '3904958',
    //     manNum: 's43567-2335-6667',
    //     description: "lorem ipsum aves mitos non the frande",
    //     manufacturer: '80033864',
    //     type: 'Server',
    //     compatibleSrv: ['RX1330', 'RX2520', 'RX2530', 'RX2540'],
    //     qty: '3',
    //     price: '109'
    // },
    // {
    //     _id: 'dfg456ghtg',
    //     sapNum: '7874958',
    //     manNum: 's43567-2335-6667',
    //     description: "lghfghfgggh fghd hd fghfgh fgh f",
    //     manufacturer: '80033864',
    //     qty: '3',
    //     price: '109'
    // },
]

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
    getTypesComponents,
    getManufacturerFullData,
    setComponentsData,
    getComponentsData,
}

export default db