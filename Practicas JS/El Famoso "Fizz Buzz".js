for (let numeros=1; numeros<=100; numeros++) {

    if (numeros%3===0) {
        console.log("fizz");
    } 
    
    else if (numeros%5===0) {
        console.log("buzz");
    }

    else if (numeros%3===0 && numeros%5===0 ) {
        console.log("fizzbuzz");
    }

    else {
        console.log (numeros);      
    }
}

