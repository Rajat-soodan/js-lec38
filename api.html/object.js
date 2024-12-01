function multipleBy5(num){
   // this.num=num; default prototype it should contaions an empty
    return num*5
}

multipleBy5.power=2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype); //output{} funciton is function and object only 
// by default prototype has some methods and{} it is the this of that  prototype 
function createUser(username,score){
    this.uername=username
}

