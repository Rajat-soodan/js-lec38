const user={
    username:"hitesh",
    logincount:8,
    issignedTrue:true,

    getUserDetails:function(){
        //console.log("Got user details from the database");
        console.log(`Username:${this.username}`);
        //this keyword is used in reference to the contextie current context
        // like if we have three objects by same name to refer to which one this keyword is used
        //console.log(this);// prints complete object
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);//output-{}// in brrowser it prints window object as whole


const promiseOne=new Promise() // here new is an instance used to create multiple objects of an literal
 
const date=new Date()

function User(username,logincount,isLoggedIn){
  this.username=username //left hand side is the variable and right hand side is what you are passing
  this.logincount=logincount
  this.isLoggedIn=isLoggedIn
  this.greeting=function(){
    console.log(`welcome ${this.username}`);
    
  }
  return this //the object is passedon and this can access theese values here
}

const userOne= User("hitesh",12,true)
const userTwo=User("ChaiAurCode",11, false) //usertwo over write the values of user 1

console.log(userOne);

// new keyword cretea snew object called instance
// then this cosntructor function is being called because of new keywords
// and it then packs a copy of arguments with it
// this keyword values are injected to this and then returned in fourth step

