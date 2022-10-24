//iterators

const nameIterator = names =>{
    let nextIndex = 0
    return{
        next:function(){
            return nextIndex<names.length ?
            {value:names[nextIndex++], done:false}:
            {done:true}
        }
    }
}

//create names arrat
 const namesArray = ['Jack', 'Jill', 'John']

 // initialize names array

 const names = nameIterator(namesArray)

 //generators


 function *sayName (){
  yield 'Jack';
  yield 'Jill';
  yield 'John'
 }

 const namess = sayName()


 //id generator

 function *createId (){
    let index = 0
    while(true){
        yield index++
    }

 }

 const gen = createId()
 console.log(gen.next().value)
 console.log(gen.next().value)
 console.log(gen.next().value)
