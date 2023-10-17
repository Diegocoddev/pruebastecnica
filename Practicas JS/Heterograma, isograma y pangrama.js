//Heterograma

function heterograma(texto){
    let mapa = new Map();
    console.log(mapa);
    for(let letraDelTexto of texto.toLowerCase()){
        if(mapa.has(letraDelTexto)){
            console.log(mapa);
            return `El texto: ${texto} no es heterograma`
        }
        mapa.set(letraDelTexto, true);
        console.log(mapa);
    }
    return `El texto recibido: "${texto}" es heterograma`
}


//Isograma

//1

function isograma(texto){
    let mapa = new Map();
    console.log(mapa);
    for(let letraDelTexto of texto.toLowerCase()){
        if(mapa.has(letraDelTexto)){
            console.log(mapa);
            return `El texto: ${texto} es un Isograma`  
        }
        mapa.set(letraDelTexto, true);
        console.log(mapa); 
    }
    return `El texto recibido: "${texto}" no es isograma`
}

//2

function isograma(texto){
    let mapa = new Map();
    console.log(mapa);
    for(let letraDelTexto of texto.toLowerCase()){
        if(!mapa.has(letraDelTexto)){      //! niega el if, es decir, el objeto va a tener las mismas letras del texto.
            console.log(mapa);
            return `El texto: ${texto} es un Isograma`  
        }
        mapa.set(letraDelTexto, true);
        console.log(mapa); 
    }
    return `El texto recibido: "${texto}" no es isograma`
}

//Pangrama


function Pangrama (texto){
    let abc = 'abcdefghijklmnñopqrstuvwxyz';
    for (let letra of abc){
        if (abc.split('').every(letra => texto.includes(letra))){
            return `El texto recibido: "${texto}" es un panagrama`

        }
    }
            return `El texto recibido: "${texto}" no es un panagrama`
}