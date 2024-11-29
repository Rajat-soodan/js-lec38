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