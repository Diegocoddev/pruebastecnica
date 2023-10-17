function convertiraLeet(texto) {
const tablaLeet = {
    a: "4",
    b: "8",
    e: "3",
    g: "6",
    l: "1",
    o: "0",
    s: "5",
    t: "7",
    z: "2",
 }  

 let textoLeet = "";
 for (let i = 0; i < texto.length; i++) {
     const caracter = texto[i].toLowerCase();
    if(tablaLeet.hasOwnProperty(caracter)){
        textoLeet += tablaLeet[caracter];
    }else{
        textoLeet += texto[i];
    }
 }
 return textoLeet; 
}
