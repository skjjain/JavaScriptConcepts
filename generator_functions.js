function* idGenerator(i){
    while(true){
        yield i++
    }
}

let _idGenerator = idGenerator(100)

console.log(_idGenerator.next().value)
setTimeout(()=>{
    console.log(_idGenerator.next().value)
},1000)
console.log(_idGenerator.next().value)
console.log(_idGenerator.next().value)
console.log(_idGenerator.next().value)
console.log(_idGenerator.next().value)