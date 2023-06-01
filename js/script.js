// let numero1 = Number(prompt("Introduce el número 1"))
// let numero2 = Number(prompt("Introduce el número 2"))

// //SUMA

// console.log(numero1 + numero2)

// //RESTA

// console.log(numero1 - numero2)

// //MULTIPLICACIÓN

// console.log(numero1 / numero2)

// //DIVISIÓN

// console.log(numero1 * numero2)

// //COMPARACIÓN

// if(numero1 < numero2){
//     console.log("El número 1 es menor que el segundo.");  
// } else if(numero1 > numero2){
//     console.log("El número 1 es mayor que el segundo.")
// } else{
//     console.log("Son iguales.")
// }

//RETOS JS

    //RETO-1 - Suma.

        // let num1 = Number(prompt("Introduce el primer número"))
        // let num2 = Number(prompt("Introduce el segundo número"))

        // console.log(num1 + num2);

    //RETO-2 - Comparación de números.

        // let num1 = Number(prompt("Introduce el primer número."))
        // let num2 = Number(prompt("Introduce el segundo número."))

        // if(num1 < num2){
        //     console.log("El número 2 es mayor que el número 1.")
        // } else if(num1 > num2){
        //     console.log("El número 1 es mayor que el número 2.")
        // } else{
        //     console.log("Son iguales.")
        // }

    //RETO-3 - Calculo mayor y menor.

        // let num1 = Number(prompt("Introduce el primer número."))
        // let num2 = Number(prompt("Introduce el segundo número."))
        // let num3 = Number(prompt("Introduce el tercer número."))

        // let mayor
        // let menor

        // if(num1 > num2 && num1 > num3){
        //     mayor = num1
        // }else if(num2 > num3){
        //     mayor = num2
        // } else{
        //     mayor = num3
        // }

        // if(num1 < num2 && num1 < num3){
        //     menor = num1
        // }else if(num2 < num3){
        //     menor = num2
        // } else{
        //     menor = num3
        // }

        // console.log(`El número más grande es el ${mayor}`)
        // console.log(`El número más pequeño es el ${menor}`)

    //RETO-4 - Calculo hipotenusa.

        // let num1 = Number(prompt("Introduce el primer cateto."))
        // let num2 = Number(prompt("Introduce el segundo cateto."))

        // let hipotenusa

        // const calcularHipotenusa = (num1,num2) => {
        //     let resultado = num1*num1 + num2*num2
        //     hipotenusa = Math.sqrt(resultado)
        //     return hipotenusa
        // }

        // console.log(calcularHipotenusa(num1,num2))

    //RETO-5/6

        // let n = prompt("Introduce la cantidad de números que vas a introducir")
        // let resultado = 0
        // let numero

        // for(let i = 0 ; i < n ; i++){
        //     numero = prompt("Introduce el número")
        //     resultado += Number(numero)
        // }

        // console.log(resultado)

    //RETO 7

        // for(let i = 0 ; i <= 100 ; i++){
        //     if(i % 2 == 0){
        //         console.log(i)
        //     }
        // }

    //RETO 8

        //N Impares.

            // let n = Number(prompt("Introduce la cantidad de números que quieres examinar."))
            // let suma = 0

            // for(let i = 0 ; i <= n ; i++){
            //     if(i % 2 != 0){
            //         suma += i
            //     }
            // }

            // console.log(suma)

        //N Pares.

            // let n = Number(prompt("Introduce la cantidad de números que quieres examinar."))
            // let suma = 0

            // for(let i = 0 ; i <= n ; i++){
            //     if(i % 2 == 0){
            //         suma += i
            //     }
            // }

            // console.log(suma)

        //MÚLTIPLOS DE 3

            // let n = Number(prompt("Introduce la cantidad de números que quieres examinar."))
            // let suma = 0

            // for(let i = 0 ; i <= n ; i++){
            //     if(i % 3 == 0){
            //         suma += i
            //     }
            // }

            // console.log(suma)

    //RETO 9

        // let segundos = 0
        // let minutos = 0
        // let horas = 0

        // for(let i = 0 ; i < 100 ; i++){

        //     segundos += 1

        //     if(segundos == 60){
        //         minutos += 1
        //         segundos = 0
        //     }

        //     if(minutos == 60){
        //         horas += 1
        //         minutos = 0
        //     }

        //     if(horas == 24){
        //         horas = 0
        //     }

        //     console.log(`${horas}:${minutos}`)
        // }

    //RETO 10

        // let n = Number(prompt("Introduce la cantidad de número que quieres examinar."))

        // let suma = 0
        // let producto = 1

        //     for(i = 1 ; i <= n ; i++){
        //         if(i % 2 == 0){
        //             suma += i;
        //         }
        //     }

        //     console.log(`La suma de los pares es: ${suma}`);

        //     for(i = 1 ; i <= n ; i++){
        //         if(i % 2 != 0){
        //             producto *= i;
        //         }
        //     }

        //     console.log(`El producto de los pares es: ${producto}`);

    //RETO 11 - Año bisiesto.

        // let año = Number(prompt("Introduce el año."))

        // if(año % 4 == 0 && año % 100 != 0){
        //     console.log("Es/Fue/Será bisiesto.")
        // } else if(año % 400 == 0){
        //     console.log("Es/Fue/Será bisiesto.")
        // } else{
        //     console.log("No es/fue/será bisiesto.")
        // }

    //RETO 12 - Caja registradora.

        // let n = Number(prompt("Introduce la cantidad de productos que quieres comprar."))
        // let dineroCliente = 0
        // let precio = 0
        // let cambio = 0

        // const cajaRegistradora = (dineroCliente, precio) => {
        //     if(dineroCliente < precio){
        //         console.log("No te llega el dinero.")
        //     } else{
        //         cambio = dineroCliente - precio
        //         console.log(`Su cambio es de: ${cambio}`)
        //     }
        // }

        // for(let i = 0; i < n ; i++){
        //     precio = Number(prompt("Introduce el precio de cada artículo."))
        //     precio += precio
        // }

        // dineroCliente = Number(prompt("Introduzca el dinero que le ha dado el cliente."))

        // cajaRegistradora(dineroCliente, precio)

    //RETO 13 - Intercambio de valores

        // let num1 = Number(prompt("Introduce el primer número."))
        // let num2 = Number(prompt("Introduce el segundo número."))
        // let x = 0

        // const intercambioValores = (num1,num2) => {
        //     x = num1
        //     num1 = num2
        //     num2 = x

        //     console.log(`El primer número tiene un valor de: ${num1}, y el segundo número tiene un valor de: ${num2}.`)
        // }

        // intercambioValores(num1,num2)

    //RETO 14 - Calculo básico.

        // let num1 = Number(prompt("Introduce el primer número."))
        // let num2 = Number(prompt("Introduce el segundo número."))

        // const calculoBasico = (a,b) => {

        //     let suma = a + b
        //     console.log(`La suma es de: ${suma}`);

        //     let resta = a - b
        //     console.log(`La resta es de: ${resta}`);

        //     let producto = a * b
        //     console.log(`El producto es de: ${producto}`);

        //     let division = a / b
        //     console.log(`La división es de: ${division}`);

        // }

        // calculoBasico(num1,num2)

    //RETO 15 - Mayor, menor o igual.

        // let num1 = Number(prompt("Introduce el primer número."))
        // let num2 = Number(prompt("Introduce el segundo número."))

        // if(num1 < num2){
        //     console.log(`El número más grande es el: ${num2}, por lo tanto el menor es el número: ${num1}.`)
        // } else{
        //     console.log("Son iguales.")
        // }
    
    



    








