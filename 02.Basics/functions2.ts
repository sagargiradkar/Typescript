function addTwo(num:number){

    return "hello"

}

function getValues(myVal:number){
    if(myVal>5){
        return true
    }
    return "200 Ok"
}

const getHellow =(s:string):string =>{
    return ""
}

const heros = ["thor","spiderMan","ironMan"]
heros.map(hero =>{
    return `hero is ${hero}`
})

function consoleError(errMsg:string):void{
    console.log(errMsg);
}

function handleError(errMsg:string):never{
    throw new Error(errMsg);
}