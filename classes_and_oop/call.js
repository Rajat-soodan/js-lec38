function SetUsername(username){
    //complex database calculations
    this.username=username
}

function createUser(username,email,password){
    SetUsername.call(this,username)// without writing call here technically it doesnot works

    this.email=email
    this.password=password
}
const chai=new createUser("chai","chai@fb.com","123")
console.log(chai);
