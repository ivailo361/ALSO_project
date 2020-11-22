function sum() {
    let args = [...arguments]
    return args.reduce((a, b) => a + b)
}

const calc = (sum) => {
    return sum + 'ivo'
}

console.log(calc(sum(1, 2, 3, 4, 6, 7)))


const myData = {
    name: 'ivo',
    age: 23,
}
console.log(sum(1, 2, 3, 4, 6, 7))

console.log('ivo')


const data = 'my data'