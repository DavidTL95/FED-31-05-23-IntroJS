const prompt = require("prompt-sync")();

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

        let minutos = 0
        let horas = 0

        // for(let i = 60 ; i === 0 ; i--){

        //     if(i > 0){
        //         minutos += 1
        //         i = 60
        //     }

        //     if(minutos === 60){
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
        // }else if(num1 > num2){
        //     console.log(`El número más grande es el: ${num1}, por lo tanto el menor es el número: ${num2}.`)
        // }else{
        //     console.log("Son iguales.")
        // }

    //RETO 16 - Mayor.

        // let num1 = Number(prompt("Introduce el primer número."))
        // let num2 = Number(prompt("Introduce el segundo número."))
        // let num3 = Number(prompt("Introduce el tercer número."))

        // if(num1 < num2 && num3 < num2){
        //     console.log(`El segundo número es el mayor.`)
        // } else if(num1 > num2 && num1 > num3){
        //     console.log(`El primer número es el mayor.`)
        // }else{
        //     console.log(`El tercer número es el mayor.`)
        // }

    //RETO 17 - Comprobación negativo.

        // let num1 = Number(prompt("Introduce el primer número."))
        // let num2 = Number(prompt("Introduce el segundo número."))
        // let num3 = Number(prompt("Introduce el tercer número."))

        // if(num1 < 0 || num2 < 0 || num3 < 0){
        //     console.log(num1 * num2 * num3)
        // }else{
        //     console.log(num1 + num2 + num3)
        // }

    //RETO 18 - Negativo, potencia y raíz.

        // let num = Number(prompt("Introduce el primer número."))

        // if(num <= 0){
        //     console.log("Error crítico")
        // }else{
        //     let multiplo = num*num
        //     let raiz = Math.sqrt(num)
        //     console.log(`Del número: ${num}, su potencia es: ${multiplo} y su raíz: ${raiz}`)
        // }

    //RETO 19 - Porcentaje alumnos.

        // let numNinhos = Number(prompt("Introduce el número de niños."))
        // let numNinhas = Number(prompt("Introduce el número de niñas."))

        // const calculoPorcentaje = (ninhos, ninhas) => {

        //     let totalAlumnos = ninhos + ninhas

        //     let porcentajeNinhos = (ninhos/totalAlumnos)*100

        //     let porcentajeNinhas = totalAlumnos - porcentajeNinhos

        //     console.log(`El porcentaje de niños es de: ${porcentajeNinhos}%, y el de niñas de: ${porcentajeNinhas}%`)
        // }

        // console.log(calculoPorcentaje(numNinhas,numNinhas))

    //RETO 20 - Porcentaje compra.

        // let mes = prompt("Introduce el mes en el que estamos.")
        // let precio = Number(prompt("Introduce precio total."))

        // mes.toLowerCase()

        // if(mes == "octubre"){

        //     let descuento = precio * (15 / 100)
        //     let preciototal = precio - descuento

        //     console.log(`El precio final con el descuento es de: ${preciototal}`) 
        //     }else{
        //         console.log(`El precio final es de: ${precio}`)
        // }

    //RETO 21/22 - Par, impar o 0.

        // let numero = Number(prompt("Introduce el número que quieres analizar."))

        // const ParImparOCero = (num) => {
        //     if(num % 2 === 0 && num !== 0){
        //         console.log("Es par.")
        //     }else if(num % 2 !== 2 && num !== 0){
        //         console.log("Es impar.")
        //     }else if(num === 0){
        //         while(num <= 0){
        //             num = prompt("Introduce un número mayor que cero, por favor.")
        //         }
        //         ParImparOCero(num)
        //     } else{
        //         console.log("Esto es un error.")
        //     }
        //     }

        // console.log(ParImparOCero(numero))

    //RETO 23 - Acceso ciclo superior.

        // let bach = prompt("¿Tienes bachiller? (True/False)")

        // bach.toLowerCase()

        // if(bach === "true"){
        //     console.log("Puedes acceder a un ciclo superior. ^^")
        // } else{
        //     let prueba = prompt("¿Superaste la prueba de acceso? nm (True/False)")
        //     prueba.toLowerCase()

        //     if(prueba === "true"){
        //         console.log("Puedes acceder a un ciclo superior. ^^")
        //     } else{
        //         console.log("No puedes acceder a un ciclo superior.")
        //     }
        // }

    //RETO 24 - Cuadrado números naturales.

        // for (i = 0; i <= 9; i++){
        //     console.log(`${i}:`, i*i)
        // }

    //RETO 25 - Suma N números naturales.

        // let num = Number(prompt("¿Cuántos números quieres analizar?"))

        // for(i = 0; i < num ; i++){
        //     console.log(`${i}`, i + i)
        // }
    
    //RETO 26 - Suma N números pares.

        let num = Number(prompt("¿Cuántos números quieres analizar?"))

        for(i = num; i < num*2 ; i++){
            if(i % 2 === 0){
                let suma = suma + i
            }
            console.log(suma)
        }
    
    //KATA Validación DNI.

        // let dni = [prompt("Introduce tu DNI sin la letra")]
        // let letra = [prompt("Introduce la letra de tu DNI")]

        // //let dniSinLetra = Number([dni.pop])
        // //let letra = [dni[8]]

        // let stringLetras = "TRWAGMYFPDXBNJZSQVHLCKET"
        // let comprobacionLetra = stringLetras.split("")

        // const validarDNI = (dni, letra) =>{

        //     let modulo = dni % 23

        //     if(letra == comprobacionLetra[modulo]){
        //         return "El DNI es válido"
        //     }else{
        //         return "El DNI es falso"
        //     }
        // }

        // console.log(validarDNI(dni, letra))



