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

console.log(user.username);
console.log(user.getUserDetails());
console.log(this);//output-{}// in brrowser it prints window object as whole


