const User = {
    name :"Sagar",
    email:"sagar@gmaiul.com",
    isActive:true
}

function creteUser({name:string,isPaid:boolean}){

}

let newUser = {name:"sagar",isPaid:true}
creteUser(newUser)

function createCourse():{name:string,price:number}{
    return {name:"reactJs",price:399}
}

 type User = {
    name :string,
    email:string,
    isActive:boolean
 }

 type myString = string
 function createNewUser(User:User){
    return {name:"",email:"",isActive:true}
 }
 createNewUser({name:"",email:"",isActive:true});

 type UserIdCreate = {
    readonly _id : string,
    name :string,
    email:string,
    isActive:boolean
    createDeatils?:number
 }

 function createUserNew(U:UserIdCreate){

 }
 let myUser : UserIdCreate = {
    _id:"12345",
    name:"S",
    email:"S@gmail.com",
    isActive:false,
   
 }

 myUser.email = "SAgar";

export{}