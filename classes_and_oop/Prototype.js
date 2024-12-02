 //  let myName="hitesh     "
//  let myChannel="chai    "

//  console.log(myName.trueLength());

 let myHeros=["thor","spiderman"]

 let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
 }
 Object.prototype.hitesh=function() {
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh=function(){
    console.log(`Hitesh says hello`);
}
//heroPower.hitesh();

 myHeros.hitesh()
 myHeros.heyHitesh()
//  heroPower.heyHitesh error-

// inheritance

const user={
    name:"chia",
    email:"chai@gogle.omc"
}
const teacher={
    makeVideo: true
}

const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:'JS assignment',
    fullTime: true,
    __proto__:TeachingSupport
}

teacher__proto__=user;

//moder syntax
Object.setPrototypeOf(TeachingSupport,teacher)

let anotherUsername="ChaiAurCode    "

String.prototype.trueLength=function(){
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()