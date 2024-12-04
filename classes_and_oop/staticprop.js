class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
 
     static createId(){
        return `123`
    }
    // stops access to the every instance created 
    //sometime we dont want to give reference of this createId to every instance which is initiated from this class

}
const hitesh=new User("raj")
hitesh.createId();
class Teacher extends User{
    constructor(username,Email){
        super(username)
        this.Email=Email;

    }
}
const iphone=new Teacher("iphone","i@phone.com")
iphone.logMe();
