 const User={
     _email:'h@hc.com',
     _password:"abc",

     get email(){
        return this._email.toUpperCase()
     },
     set email(value){
         this._email=value
     }
}

const tea=Object.create(User)
console.log(tea.email);
// the processing of bringing the data from the memory to overwrite this data and make changes we use here getters and setters
 