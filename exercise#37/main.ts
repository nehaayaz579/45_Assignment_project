function large_shirt1(size:string , label:string){
    return ` my shirt size is ${size} and my label is ${label}`
}
let f1 = large_shirt1("large","I love typescript")
console.log(f1)

function large_shirt2(size:string , label:string){
    return ` my shirt size is ${size} and my label is  ${label}`
}
let f2 = large_shirt2("medium","I love typescript")
console.log(f2)

function large_shirt3(size:string , label:string){
    return `my shirt size is ${size} and my label is ${label}`
}
let f3 = large_shirt3("Any size","I love typescript")
console.log(f3)