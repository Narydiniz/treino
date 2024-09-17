const teste = new Promise((resolve, rejeted ) =>{
    let soma = 1+ 2
    if (soma === 2){
        resolve ('OK')
    }else {
        rejeted('Errado faça de novo')
    }
        
})
console.log ('Esperando uma promise')

teste.then((resultado)=>{
    console.log(`${resultado}`)
}).catch((error)=>{
    console.error(`${error}`)
})