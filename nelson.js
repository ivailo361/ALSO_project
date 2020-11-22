function sum() {
    console.log([...arguments])
    let args = [...arguments]
    return args.reduce((a, b) => a + b)
}

console.log(sum(1, 2, 3, 4, 6, 7))