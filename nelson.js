function sum() {
    let args = [...arguments]
    return args.reduce((a, b) => a + b)
}

const calc = (sum) => {
    return sum + 'ivo'
}

console.log(calc(sum(1, 2, 3, 4, 6, 7)))


const data = {
    name: 'ivo',
    age: 23,
}


const newParam = ''

function check() {
    
}