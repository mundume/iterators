// const sym1 = Symbol()

// const sym2 =  Symbol('Sym2')

// console.log(sym2)


//unique object keys

const key1 = Symbol()
const key2 = Symbol('Symn')

const myObj = {}

myObj[key1] = 'Prop1'
myObj[key2] = 'Prop2'

console.log(myObj[key1] = 'Prop1')

