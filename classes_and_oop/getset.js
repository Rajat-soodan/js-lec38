class User{
  constructor(email,password){
    this.email=email;
    this.password=password
  }

  get password(){
     return this.password.toUpperCase()
  }
  set password(value){
  this.password=value
  }
}
const hit=new User("hitesh.ai","3234")
console.log(hit.password);
//consider we dont want everyone to access the pasword in that sceneario we use getter and setter to do the changes
// here by default every calss has getters and setters in it
// if we define get then set has to be defined for it
//if one is declared other has to be declared in such scenario
//to get or set a value outside a class we use getters and setters

