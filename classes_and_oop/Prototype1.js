class User {

    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`User is${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`New Course was added by ${this.username}`);
        
    }
}

const chai=new Teacher("chai","chai@gmail.com","1234")

chai.addCourse()

const masalaCHai=new User("masalaChai")
chai.logMe()
masalaCHai.logMe()
chai==masalaCHai// false output

console.log(chai instanceof Teacher);//true
// chai instanceof Teacher//true


