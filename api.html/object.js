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
    this.username=username
    this.score=score
}

createUser.prototype.increment=function(){
    this.score++;// the onle who called go to that
// jisne bulaya hai uska kaam krdo current context meh
}
createUser.prototype.printMe=function(){
    console.log(`score is ${this.score}`);
    
}
// here function score++ doesnot knows which const to be called here
// who called it it doesnot have a context here
const chai= new createUser("chai",25)
const tea=new     createUser("tea",250)

chai.printMe()