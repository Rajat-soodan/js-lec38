const promiseOne=new Promise(function(resolve,reject){
    // Do an async task
    //DB calls,cryptography,network
    setTimeout(function() {
        console.log(`Async task is completed`);
        resolve() // it connects the promise and then ie its execution part
    },1000);
})

//as we stored the promise in a variable we need to consume it after its creation

promiseOne.then(function(){
    console.log("Promise consumed");// to use promise we use then here 
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asyn task2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve({username:"chai",email:"chai@code.com"}) // think data is coming form somewhere and we have to pass something to execution part then we use data inside it
    },1000)// data can bein an aform like array object  
})
promiseThree.then(function(user){//this user is the what we are accepting as input here the object
     console.log(user);//to fetch user values output is used
     })
const promiseFour= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username: "hitesh",password:"123"})
        }
        else{
            reject(`ERROR: Something went wrong`)
        }
    },1000)
})

 promiseFour
 .then((user)=>{
       console.log(user);
       return user.username//  we cant directly use console log so we need this
})  // this return cant be directly fetched to do so we need .then for execution
.then((uername)=>{
   console.log(username);
   
}).
catch(function(error){
    console.log(error);
    
}).finally(()=>console.log("The proimse is either resolved or rejected "))

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username: "javascript",password:"123"})
        }
        else{
            reject(`ERROR: Js went wrong`)
        }
    },1000)
});
// it watis for sometime to work to be completed and then waits therr and throws error
//the issue is we cant gracefully catch 

async function consumePromiseFive(){
    try{
 const response=await promiseFive()// ouyput of await is an object so we need to store it in a const
 console.log(response);
    }
    catch{
        console.log(error);
        
    }
}

consumePromiseFive()
   
async function getAllUsers(){
 try {
  const response=await fetch('https://jsonplaceholder.typicode.com/users')
  const data= await response.json()
  console.log(data);
 } catch (error) {
    console.log("E:",error)
    
}
  }
getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))

//their isa microtask priority queue which gets executed in the top most priority
// on execution fetch gets divided into two parts first is data part variables   in memory reserve and the other one is web browser or the node
// data is onfulfilled and on rejection  which both are arrays that is resolve and reject
// and we are not allowed to directly add values in to these arrays
// these both are privaate fields and the data is also private

// web browser  requires a resoure to send an api request 
// network request will either bring the data or not if it brings it goes to onfield that is resolved and if no data it goes to onrejection
//all the errors even 404 data goes and counts into onfulfilled 
// data value is initially empty
//on fulfilled and on rejection both have functions which are required for moving data from request to data field
// data should fulfill response