const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(descriptor);
const chai={
    name:"ginger chai",
    price:250,
    isAvailable:true
}

console.log(chai.getOwnPropertyDescriptor(chai,"name"));
Object.defineProperties(chai,'name',{
//    writable:false,
   enumerable:false
 })
// console.log(chai.getOwnPropertyDescriptor(chai,"name"));


for (let [key,value] of Object.entries[chai]) {
    if(typeof value!== 'function')
    console.log(`${key}:${value}`);
}