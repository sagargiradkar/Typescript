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

export{}