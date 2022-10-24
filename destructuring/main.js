//destructuring assignment
// let a,b;
// //rest pattern
// [a,b, ...rest] = [100, 200, 300,400,500]



({ a, b, ...rest} = {a:100, b:200, c:300, d:400});


console.log(rest)

// const people = ['John', 'Beth', 'Mike']

// const [person1, person2, person3] = people


// console.log(person1, person2, person3)

//parse arrays returned from functions

function getPeople (){
    return ['John', 'Beth', 'Mike']
}

let [person1, person2, person3] = getPeople()

console.log(person1, person2, person3)
//pbject destructuring
const person={
    name:'John',
    age:32,
    city:'Miami',
    gender: 'Male'

}
//es5 Destructuring
// const name = person.name, 
// age= person.age, 
// city = person.city

//es6 destructuring
 const {name, age, city} = person
 console.log(name, age, city)

