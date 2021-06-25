
function getDdd(phone){
     let tel = phone.replace(/([^\d])+/gim, '')  
    if  (tel.length < 10){
        console.log()
        return ("Numero sem DDD")
    }
        if (tel.length > 11){
            const doisnumeros = (tel.substring(0, 2).includes("55"))
            if (doisnumeros) { 
                 tel = tel.substring(2)
        }
        if (tel.length >= 12){
            console.log()
            return ("Numero Invalido")
        }      
    }  
    let ddd = tel.substring(0, 2)
    const teste = ["11","21","31"]
    if  (!teste.some( t=> t == ddd)) {     
        return 11
    }     
    return ddd     
}


let fone = "+55(55) 9 4005-2167"
console.log(getDdd(fone))




