let score:number | string = 33 
score = 44
score = "55"

type User = {
    name:string
    id:number
}
type Admin ={
    username:string
    id:number
}

let sagar :User | Admin ={
    name:"Sagar",id:335
}
console.log(sagar)

sagar = {username:"SPG",id:225}
console.log(sagar)

function getDbId(id:number|string){
    console.log('====================================');
    console.log(`DB id is :${id}`);
    console.log('====================================');
    if (typeof id === 'string'){
        id.toString()
        console.log(`DB id is :${id}`)
    }
    else{
        id.toExponential()
        console.log('====================================');
        console.log(`DB id is :${id}`);
        console.log('====================================');
    }
}

getDbId(3);
getDbId("3")
const data:number[]=[1,2,3,4,5,60]
const data2:string[]=["sagar","Prakash","Giradkar"]
const data3:(string | number)[] =["Sagar",1,"Prakash"]
const data4:any =["sagar",1,2]

console.log(data)
console.log(data2)
console.log(data3)
console.log(data4)

let seatAllotment:"aisle"|"middle"|"window"
seatAllotment = "aisle"

export {}