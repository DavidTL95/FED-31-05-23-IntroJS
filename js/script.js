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
        //     hipotenusa = Math.sqrt(resultado).toFixed(2)
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

        // let horas = 0
        // let minutos = 0
        // let segundos = 0

        // while(horas <= 24){
        //     segundos++
        //     if(segundos == 60){
        //         segundos = 0
        //         minutos++
        //     }
        // }
        // if(minutos == 60){
        //     minutos = 0
        //     horas++
        // }
        // // if(horas == 24){
        // //     horas = 0
        // // }

        // console.log(`${horas}:${minutos}:${segundos}`)

        //-----------------------------------------------------------

        // let minutos = 0
        // let horas = 0

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

        //MAL

            // let num = Number(prompt("¿Cuántos números quieres analizar?"))
            // let suma = 0
            // let contador = 0
            // let i = num

            // while(contador < num){
            //     if(num % 2 === 0){
            //         suma = suma + i
            //         contador = contador + 1
            //         i++
            //     }
            // }

            // console.log(suma)

        // const esPar = (num) {
        //     if(num % 2 === 0){
        //         return true
        //     } else{
        //         return false
        //     }
        // }

        //FORMA 1

            // let cantidadPares = Number(prompt("¿Cuántos pares quieres sumar?"))
            // let suma = 0

            // for(let i = 2; i <= cantidadPares*2; i++){
            //     if(esPar(i)){
            //         suma += i
            //     }
            // }

            // console.log(suma)

        //FORMA 2

            // let cantidadParesDos = Number(prompt("¿Cuántos pares quieres sumar?"))
            // let sumaDos = 0

            // for(let i = cantidadParesDos; i < cantidadParesDos + cantidadParesDos*2; i++){
            //     if(esPar(i)){
            //         suma += i
            //     }
            // }

            // console.log(suma)


    //RETO 27 - Calcular media.

        // let num = [prompt("Introduce los números")]

        // let numerosEparados = num.splite(",")

        // num.push(-1)

        // console.log(numerosEparados)

        // for(i ; i < num.length ; num[i]){
        //     let suma = suma + i
        // }

        //----------------

        // let arrayNumeros = []
        // let numero;

        // while (numero !== -1){
        //     numero = Number(prompt("Introduce un número"))
        //     arrayNumeros.push(numero)
        // }

        // arrayNumeros.pop()

        // let suma = 0

        // for(let i = 0; i < arrayNumeros.length; i++){
        //     suma += arrayNumeros[i]
        // }

        // let media = suma / arrayNumeros.length

        // console.log(media)


    //RETO 28 - Clave de acceso.

        // let claveVerdadera = "eureka"
        // let clave = prompt("Introduce la contraseña.")
        //     clave.toLowerCase
        // let intentos = 2

        // const comprobarClave = (contraseña) => {
        //     if(contraseña === claveVerdadera){
        //         console.log("Saliendo...")
        //     } else if(intentos > 0){
        //         intentos -= 1
        //         contraseña = prompt("Introduce otra contraseña.")
        //         comprobarClave(contraseña)
        //     }else{
        //         console.log("Agotaste los 3 intentos...LLamando a la poli...")
        //     }  
        // }

        //comprobarClave(clave)

    //RETO 29 - Lector números enteros. Máximo, mínimo y media.

        // let arrayNumeros = []
        // let numero;
        // let suma = 0

        // numero = parseInt(prompt("Introduce un número"))

        // while (numero !== 0){
        //     arrayNumeros.push(numero)
        //     numero = parseInt(prompt("Introduce un número"))
        //     console.log(arrayNumeros)
        // }

        // let numeroMayor = arrayNumeros[0]
        // let numeroMenor = arrayNumeros[0]

        // for(i = 0; i < arrayNumeros.length; i++){
        //     console.log(arrayNumeros[i])
        //     if(arrayNumeros[i] > numeroMayor){
        //         numeroMayor = arrayNumeros[i]
        //     }

        //     if(arrayNumeros[i] < numeroMenor){
        //         numeroMenor = arrayNumeros[i]
        //     }
        //     suma += arrayNumeros[i];
        // }

        // let media = suma/arrayNumeros.length

        // console.log(`El número más grande es el: ${numeroMayor}, el más pequeño es: ${numeroMenor} y la media de todos los números es: ${media.toFixed(2)}`)

    //RETO 30 - Mostrar números múltilos de 2 y 3 hasta 100.

        // for(i = 0; i <= 100; i++){
        //     if(i % 2 == 0 || i % 3 == 0){
        //         console.log(`- ${i}`)
        //     }
        // }
    
    //RETO 31 - Calificaciones alumnos. 

        // let nombre

        // const notasAlumnos = () =>{

        //     console.log("Introduce el nombre del alumno.")
        //     nombre = prompt("Nombre: ")

        //     if(nombre !== ""){

        //         console.log("Introduce la nota de la parte práctica.")
        //         let practica = prompt("Nota: ")
        //         console.log("Introduce la nota de la parte de problemas.")
        //         let problemas = prompt("Nota: ")
        //         console.log("Introduce la nota de la parte teórica.")
        //         let teoria = prompt("Nota: ")
            
        //         calculoMedia(practica,problemas,teoria)

        //     }else{
        //         console.log("SALIENDO...")
        //     }

        // }

        // const calculoMedia = (nota1, nota2, nota3) => {

        //     nota1 = (nota1 * 10) / 100
        //     nota2 = (nota2 * 50) / 100
        //     nota3 = (nota3 * 40) / 100

        //     let media = nota1 + nota2 + nota3

        //     if(media > 0 && media < 10){
        //         console.log(`La media de ${nombre} es de: ${media}.`)
        //     }else{
        //         console.log("!!!ERROR¡¡¡")
        //         console.log("Alumno no válido.")
        //         notasAlumnos()
        //     }

        // }

        // notasAlumnos()

//VANILLA-1

    //RETO - 1 - Mayor, menor e igual.

        // let num1 = Number(prompt("Introduce el primer número."))
        // let num2 = Number(prompt("Introduce el segundo número."))

        // if(num1 === num2){
        //     console.log("Los números son iguales.")
        // }else if(num1 < num2){
        //     console.log("El segundo número es mayor que el primero.")
        // }else{
        //     console.log("El primer número es mayor que el segundo.")
        // }

    //RETO - 2/3 - Mensaje de bienvenida.

        // let nombre = prompt("Introduce tu nombre.")

        // console.log(`Bienvenido ${nombre}`)

    //RETO - 4 - Área círculo.
    
        // let radio = Number(prompt("Introduce el área del círculo."))
        // let pi = 3.1416

        // let area = pi * radio * radio

        // console.log(`El área del círculo es de: ${area}`)

    //RETO - 5 - Divisible entre dos.

        // let num = Number(prompt("Introduce un número."))

        // if(num % 2 === 0){
        //     console.log("Es divisible entre 2.")
        // }else{
        //     console.log("No es divisible entre 2.")
        // }
    
    //RETO - 6 - IVA.

        // let precio = Number(prompt("Introduce el precio."))
        // let iva = 0

        // iva = precio * (21/100)

        // let precioTotal = precio + iva

        // console.log(`El precio final es de: ${precioTotal}`)

    //RETO - 7/8 - While/For hasta 100.

        // let i = 0

        // while(i <= 100){
        //     console.log(i)
        //     i++
        // }

        // for(i = 0 ; i <= 100 ; i++){
        //     console.log(i)
        // }

    //RETO - 9 - Mostrar divisibles entre 2 y 3 hasta 100.

        // for(i = 0; i <= 100 ; i++){
        //     if(i % 2 === 0 || i % 3 === 0){
        //         console.log(i)
        //     }
        // }

    //RETO - 10 - Número de ventas.

        // let ventas = Number(prompt("Introduce el número de ventas"))
        // let precio = 0
        // let precioTotal = 0

        // for(i = 0; i < ventas; i++){
        //     precio = precio + Number(prompt("Introduce el precio de la compra"))
        // }

        // console.log(`El precio total es de: ${precio}`)

    //RETO - 11 - Dia semana.

        // console.log("¿Qué día es hoy?")
        // let dia = prompt("Día: ")

        // dia.toLowerCase()
    
        // switch(dia){
        //     case "lunes":
        //     case "martes":
        //     case "miercoles":
        //     case "jueves":
        //     case "viernes":
        //         console.log("Toca laburar. :´(")
        //         break;

        //     case "sabado":
        //     case "domingo":
        //         console.log("¡No hay que laburar! :D")
        //         break;

        //     default:
        //         console.log("Ese día no existe.")
        // }

    //RETO - 12 - Contraseña.

        // let contraseña = "contrasenha"
        // let intentos = 3

        // while(intentos > 0){
        //     console.log("Introduce la contraseña: ")
        //     let contr = prompt("Contraseña: ")

        //     if(contr === contraseña){
        //         console.log("GOOD JOB")
        //         break;
        //     }else{
        //         intentos--
        //         console.log(`MAAAAAAAL! Te quedan ${intentos} intentos.`)
        //     }
        // }

    //RETO - 13 - Calculadora inversa.

        // console.log("Escribe el primer operador.")
        // let num1 = parseInt(prompt(""))
        // console.log("Escribe el segundo operador.")
        // let num2 = parseInt(prompt(""))

        // console.log("Escribe el signo aritmético. (+, -, *, /, ^, %)")
        // let signo = prompt("")
        // let resultado = 0

        // switch(signo){
        //     case "+":
        //         resultado = num1 + num2
        //         console.log(`La suma es: ${resultado}`)
        //         break;
        //     case "-":
        //         resultado = num1 - num2
        //         console.log(`La resta es: ${resultado}`)
        //         break;
        //     case "*":
        //         resultado  = num1 * num2
        //         console.log(`La multiplicación es: ${resultado}`)
        //         break;
        //     case "/":
        //         resultado = num1 / num2
        //         console.log(`La división es: ${resultado}`)
        //         break;
        //     case "^":
        //         resultado = Math.pow(num1,num2)
        //         console.log(`El exponente es: ${resultado}`)
        //         break;
        //     case "%":
        //         resultado = num1 % num2
        //         console.log(`El resto es: ${resultado}`)
        //         break;
        //     default:
        //         console.log("Ese símbolo aritemético no está disponible o no existe.")
        // }

//VANILLA 2

    //RETO 1 - Crea una aplicación que nos calcule el área de un círculo, cuadrado o triángulo. Pediremos al usuario que figura queremos calcular su área y según lo introducido pedirá los valores necesarios para calcular el área. Para ello has de crear un método por cada figura para calcular cada área, este devolverá un número real. Muestra el resultado por consola. Aquí te mostramos que necesita cada figura: 
    //• Circulo: (radio^2)*PI 
    //• Triangulo: (base * altura) / 2 
    //• Cuadrado: lado * lado

        // const calcCirculo = () => {

        //     console.log("Introduce el radio del círculo.")
        //     let rad = Number(prompt("Radio: "))

        //     let area = ((rad * rad) * Math.PI)

        //     return area;
        // }

        // const calcTriangulo = () => {

        //     console.log("Introduce la base del triángulo.")
        //     let base = Number(prompt("Base: "))

        //     console.log("Introduce la altura del triángulo.")
        //     let altura = Number(prompt("Altura: "))

        //     let area = (base * altura) / 2

        //     return area;
        // }

        // const calcCuadrado = () => {

        //     console.log("Introduce el lado del cuadrado.")
        //     let lado = Number(prompt("Base: "))

        //     let area = lado * lado

        //     return area;
        // }

        // console.log("Indica qué tipo figura quieres comprobar.")
        // console.log("1. Círculo.")
        // console.log("2. Triángulo.")
        // console.log("3. Cuadrado.")

        // let fig = Number(prompt("Figura: "))

        // switch(fig){
        //     case 1:
        //         calcCirculo();
        //         break;

        //     case 2:
        //         calcTriangulo();
        //         break;

        //     case 3:
        //         calcCuadrado();
        //         break;

        //     default:
        // }

    //RETO 2 - Crea una aplicación que nos genere una cantidad de números enteros aleatorios pasados por el usuario (prompt). Crea un método donde pasamos como parámetros entre qué números queremos que los genere, podemos pedirlas al usuario antes de generar los números. Este método devolverá un número entero aleatorio. Muestra estos números por consola.

        // console.log("Introduce la cantidad de números que quieres.")
        // let num = parseInt(prompt("Nº: "));

        // // for(i = 0; i < num; i++){
        // //     let numAleatorio = parseInt(Math.random() * 100)
        // //     console.log(numAleatorio)
        // // }

        // console.log("Introduce la cantidad mínima.")
        // let numMenor = parseInt(prompt("Nº: "));

        // console.log("Introduce la cantidad máxima.")
        // let numMax = parseInt(prompt("Nº: "));

        // const aleatorio = (x, y, z) => {

        //     let contador = 0;

        //     while(contador < z){

        //         let numAleatorio = parseInt(Math.random() * 100)
        //         if(numAleatorio > x && numAleatorio < y){
        //             console.log(numAleatorio)
        //             contador++;
        //         }

        //     }
        // }

        // aleatorio(numMenor, numMax, num);

    //RETO 3 - Crea una aplicación que nos pida un número por prompt y con un método se lo pasamos por parámetro para que nos indique si es o no un número primo, debe devolver true si es primo sino false. Un número primo es aquel que solo puede dividirse entre 1 y sí mismo. Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si es primo.

        // console.log("Introduce un número.")
        // let num = parseInt(prompt("Nº: "))

        // const esPrimo = (x) => {

        //     for(i = 2; i < x ; i++){
        //         if(x % i === 0){
        //             return false
        //         }else{
        //             return true
        //         }
        //     }
        // }

        // console.log(esPrimo(num));

    //RETO 4 - Crea una aplicación que nos calcule el factorial de un número pedido por prompt, lo realizará mediante un método al que le pasamos el número como parámetro. Para calcular el factorial, se multiplica los números anteriores hasta llegar a uno. Por ejemplo, si introducimos un 5, realizará esta operación 5*4*3*2*1=120.

        // console.log("Introduce un número.")
        // let num = parseInt(prompt("Nº: "))

        // const factorial = (x) => {

        //     let fac = x
            
        //     for(i = x - 1; i >= 1; i--){
        //         fac *= i
        //     }
        //     return fac
        // }

        // console.log(factorial(num));

    //RETO 5 - Crea una aplicación que nos convierta un número en base decimal a binario. Esto lo realizará un método al que le pasaremos el número como parámetro, devolverá un String con el número convertido a binario. Para convertir un número decimal a binario, debemos dividir entre 2 el número y el resultado de esa división se divide entre 2 de nuevo hasta que no se pueda dividir más, el resto que obtengamos de cada división formará el número binario, de abajo a arriba.

//VANILLA 3 - CONDICIONALES

    //RETO - 1 - Dos número, múltiplos o no.

        // let num1 = Number(prompt("Introduce el primer número."))
        // let num2 = Number(prompt("Introduce el segundo número."))

        // if(num1 % num2 === 0 || num2 % num1 === 0){
        //     console.log("Son múltiplos.")
        // }

    //RETO - 2 - Mayor.

        // let num1 = Number(prompt("Introduce el primer número."))
        // let num2 = Number(prompt("Introduce el segundo número."))

        // if(num1 < num2){
        //     console.log("El segundo número es mayor que el primero.")
        // }else if(num1 > num2){
        //     console.log("El primer número es mayor que el segundo.")
        // }else{
        //     console.log("Son iguales.")
        // }
    
    //RETO - 3 - Positivo, negativo o 0.

        // let num = Number(prompt("Introduce el número."))

        // if(num < 0){
        //     console.log("Es negativo.")
        // }else if(num > 0){
        //     console.log("Es positivo.")
        // }else{
        //     console.log("Es 0.")
        // }

    //RETO - 4 - Contar string.

        // let palabra = prompt("Introduce el string.")

        // if(palabra.length >= 5){
        //     console.log("Tiene 5 o más caracteres.")
        // }else{
        //     console.log("Tiene menos de 5 caracteres.")
        // }

    //RETO - 5 - 3 números entre 1 - 10, promedio de los 3 y determinar si el promedio es mayor que 5.

        // let num1 = Number(prompt("Introduce el primer número."))
        // let num2 = Number(prompt("Introduce el segundo número."))
        // let num3 = Number(prompt("Introduce el tercer número."))

        // while(num1 >= 10 || num1 <= 1){
        //     num1 = Number(prompt("El primer número tiene que ser mayor que 1 y menor que 10."))
        // } 

        // while(num2 >= 10 || num2 <= 1){
        //     num2 = Number(prompt("El segundo número tiene que ser mayor que 1 y menor que 10."))
        // }

        // while(num3 >= 10 || num3 <= 1){
        //     num3 = Number(prompt("El tercer número tiene que ser mayor que 1 y menor que 10."))
        // }

        // let promedio = (num1 + num2 + num3)/3

        // if(promedio > 5){
        //     console.log(`El promedio es: ${promedio}. Por lo tanto es mayor que 5.`)
        // }else{
        //     console.log(`El promedio es: ${promedio}. Por lo tanto es menor o igual a 5.`)
        // }

    //RETO - 6 - String y comprobar que esté en minúscula.

        // let palabra = prompt("Introduce una palabra.")
        
        // if(palabra == palabra.toLowerCase()){
        //     console.log("Está todo en minúscula.")
        // }else{
        //     console.log("No está todo en minúscula.")
        // }

    //RETO - 7 - Num aleatorio y comprobar si es par o no.

        // let num = Math.round(Math.random() * 21) + 1
                    //Math.ceil -- Hacia arriba
                    //Math.floor -- Hacia abajo
                    //Math.round -- Normal

        // if(num % 2 === 0){
        //     console.log(`El número: ${num} es par.`)
        // }else{
        //     console.log(`El número: ${num} no es par.`)
        // }

    //RETO - 8 - Aprobado o suspenso.

        // let num1 = Number(prompt("Introduce la primera nota."))
        // let num2 = Number(prompt("Introduce la segunda nota."))
        // let num3 = Number(prompt("Introduce la tercera nota."))

        // let media = (num1 + num2 + num3) / 3

        // if(media >= 5){
        //     console.log("¡¡¡APROBADO!!!")
        // }else{
        //     console.log("PASA A ESTUDIAR >:(")
        // }

    //RETO - 9 - Ford Fiesta o Ford Focus.

        // console.log("1. Ford Fiesta.")
        // console.log("2. Ford Focus.")

        // let descuento = 0
        // let opcion = Number(prompt("¿Qué coche quieres comprar?"))

        // while(opcion != 1 && opcion != 2){
        //     opcion = Number(prompt("No es una opción válida."))
        // }

        // switch(opcion){
        //     case 1:

        //         descuento = 1000 * (5/100)
        //         console.log(`Tu descuento es de: ${descuento} lereles :)`)

        //         break;

        //     case 2:

        //         descuento = 1000 * (10/100)
        //         console.log(`Tu descuento es de: ${descuento} lereles :)`)

        //         break;

        //     default:
        //         console.log("Pos te quedas sin descuento.")
        // }

    //RETO - 10 - Número mes.

        // let mes = parseInt(prompt("Introduce el número del mes."))

        // switch(mes){
        //     case 1:
        //         console.log("Enero tiene 31 días.")
        //         break;
        //     case 2:
        //         console.log("Febrero tiene 28 días.")
        //         break;
        //     case 3:
        //         console.log("Marzo tiene 31 días.")
        //         break;
        //     case 4:
        //         console.log("Abril tiene 30 días.")
        //         break;
        //     case 5:
        //         console.log("Mayo tiene 31 días.")
        //         break;
        //     case 6:
        //         console.log("Junio tiene 30 días.")
        //         break;
        //     case 7:
        //         console.log("Julio tiene 31 días.")
        //         break;
        //     case 8:
        //         console.log("Agosto tiene 31 días.")
        //         break;
        //     case 9:
        //         console.log("Septiembre tiene 30 días.")
        //         break;
        //     case 10:
        //         console.log("Octubre tiene 31 días.")
        //         break;
        //     case 11:
        //         console.log("Noviembre tiene 30 días.")
        //         break;
        //     case 12:
        //         console.log("Diciembre tiene 31 días.")
        //         break;
        //     default:
        //         console.log("Ese mes no es válido.")
        // }

    //RETO - 11 - Cálculos rueda.

        // let diametro = parseFloat(prompt("Introduce el diámetro de la rueda(en metros)."))
        // let grosor = parseFloat(prompt("Introduce el grosor de la rueda(en metros)."))

        // if(diametro > 1.4){
        //     console.log("La rueda es para un vehículo grande.")
        // }else if(diametro <= 1.4 && diametro > 0.8){
        //     console.log("La rueda es para un vehículo mediano.")
        // }else{
        //     console.log("La rueda es para un vehículo pequeño.")
        // }

        // if(diametro > 1.4 && grosor < 0.4 || diametro <= 1.4 && diametro > 0.8 && grosor < 0.25){
        //     console.log("El grosor para esta ruueda es inferior al recomendado.")
        // }

    //RETO - 12 - Cálculos rueda.

        // console.log("¿Que tipo de vehículo has alquilado?")

        // console.log("1. Coche.")
        // console.log("2. Moto.")
        // console.log("3. Autobús.")

        // let vehículo = parseInt(prompt("Selecciona el tipo de vehículo: "))

        // while(vehículo != 1 && vehículo != 2 && vehículo != 3){
        //     vehículo = parseInt(prompt("Selecciona un tipo de vehículo válido: "))
        // }

        // let kilometros = Number(prompt("Introduce la cantidad de kilómetros que has recorrido."))
        // let precio = 0

        // switch(vehículo){
        //     case 1:
        //         precio = kilometros * 0.1
        //         console.log(`El precio total es de: ${precio}`)
        //         break;
        //     case 2:
        //         precio = kilometros * 0.2
        //         console.log(`El precio total es de: ${precio}`)
        //         break;
        //     case 3:
        //         precio = kilometros * 0.5
        //         console.log(`El precio total es de: ${precio}`)
        //         break;
        //     default:
        //         console.log("No es un tipo de vehícuilo válido.")
        // }

//VANILLA 3 - BUCLES

    //RETO - 1 - Escribir un script que pida un valor entero y muestre en pantalla una lista de números desde el 0 al valor tecleado. Los números se separarán por comas.

        //let numero = parseInt(prompt("Di un número"))

    //RETO - 2 - Hacer un programa que cuente de N en N hasta un número M proporcionado por el usuario. El usuario también ha de proporcionar N.

        // let empezar = parseInt("Di desde que número quieres contar.")
        // let hasta = parseInt("Di hasta que número quieres contar.")
        // let num = parseInt("Di de cuanto quieres contar.")

        //  for (let i = empezar; i<= hasta; i += num){
        //     console.log(i)
        //  }

    //RETO - 3 - Genera una lista con todos los números pares positivos por debajo del número tecleado por el usuario.

        // let num = parseInt(prompt("Di un número."))

        // //1

        // for(let i = 2; i <= num; i += 2){
        //     console.log(i)
        // }

        // //

        // for(let i = 0; i<= num; i++){
        //     if(i > 0 && i % 2 === 0){
        //         console.log(i)
        //     }
        // }

    //RETO 4 - Escribe la tabla de multiplicar de un número introducido por el usuario.

        // let num = parseInt(prompt("Di un número."))

        // for(let i = 1; i <= 10; i++){
        //     console.log(num * i)
        // }

    //RETO 5/6 - Formar un triángulo de este estilo.
    //*
    //**
    //***
    //****

        // let num = parseInt(prompt("Di el número de líneas."))

        // let string = ""

        // for(let i = 1; i <= num; i++){
        //     string += "*"
        //     console.log(string)
        // }

    //RETO 7 - Calcula la suma de todos los números enteros positivos entre 0 y el número tecleado por el usuario.
    //INCOMPLETO

        // let suma = 0
        // for(let i = 0; i < 4; i++){
        //     let num = parseInt(prompt("Di un número"))
        // }

    //RETO 8 - Saca por consola los números primos del 0 al número que introduzca un usuario por prompt.

        // let num = parseInt(prompt("Di un número."))

        // const primos = (numero) => {
        //     for(let i = 2; i < numero; i++){
        //         if(numero % i === 0){
        //             return false
        //         }
        //     }
        //     return numero;
        // };

        // for(i = 2; i <= num; i++){
        //     if(primos(i)){
        //         console.log(i)
        //     }
        // }

    //RETO 9 - Dado un número entero, muestra una cuenta atrás desde el número tecleado hasta el 0. Modifica el programa para que el usuario introduzca dos números y se efectúe una cuenta atrás desde el primer número hasta el segundo. Modifícalo de nuevo para que el programa determine qué número es el mayor y cuente desde el mayor hasta el menor.

        // let num1 = parseInt(prompt("Di un número."))
        // let num2 = parseInt(prompt("Di un número."))


        // if(num1 > num2){
        //     for(let i = num1; i >= num2; i--){
        //         console.log(i)
        //     }
        // }else{
        //     for(let i = num2; i >= num1; i--){
        //         console.log(i)
        //     }
        // }

    //RETO 10 - Pide al usuario cinco números, almacénalos en un array y muestra por consola elresultado de cada uno de ellos multiplicado por 3. Muestra también un array que contenga todos los resultados.
    
        // let arryNumero = []

        // for(let i = 0; i < 5; i++){
        //     let num = prompt("Di un número.")
        //     arryNumero.push(num)
        // }

        // let arrayMulti = []

        // for(let i = 0; i < arryNumero.length; i++){
        //     arrayMulti.push(arryNumero[i] * 3)
        // }

        // console.log(arryNumero.join(", "))
        // console.log(arrayMulti.join(", "))

//VANILLA 3 - FUNCIONES

    //RETO 1 - Crea una función que convierta grados celsius a grados fahrenheit.

        // console.log("¿Qué temperatura quieres pasar a Fahrenheit?")
        // let grados = Number(prompt("Grados: "))

        // const calcularGrados = (x) => {
        //     let resultado = (x * 9/5) + 32
        //     console.log(`La temperatura en Fahrenheit es de: ${resultado}`)
        // }

        // calcularGrados(grados);

    //RETO 2 - Crea una función que determine si un número es par o impar.

        // console.log("¿Qué número quieres comprobar?")
        // let num = Number(prompt("Nº: "))

        // const parOImpar = (x) => {
        //     if(x % 2 === 0){
        //         console.log(`El número ${x} es par.`)
        //     } else if(x % 2 !== 0){
        //         console.log(`El número ${x} es impar.`)
        //     }else{
        //         console.log("Nah de nah.")
        //     }
        // }

        // parOImpar(num);

    //RETO 3 - Crea una función que determine si un número es primo o no.

        // console.log("¿Qué número quieres comprobar?")
        // let num = Number(prompt("Nº: "))

        // const primo = (x) => {
        //     for(i = 2; i < x ; i++){
        //         if(x % i === 0){
        //             return false
        //         }
        //     }
        // }

        // (primo(num) === false)

        // ? console.log("No es primo.")

        // : console.log("Es primo.")

    //RETO 4 - Crea una función que reciba un número de dni como parámetro, y devuelva la letra del mismo. Si el dni tiene algún error debe comunicarlo. Recuerda que el array de letras de DNI es [TRWAGMYFPDXBNJZSQVHLCKE].

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

    //RETO 5 - Crea una función que reciba 2 parámetros, precio e iva, y devuelva el precio con iva incluido. Si no recibe el iva, aplicará el 21 por ciento por defecto.

        // console.log("Introduce el precio.")
        // let precio = Number(prompt("Precio: "))

        // console.log("Introduce el iva.")
        // let iva = Number(prompt("IVA: "))

        // const calcularIva = (x, y) => {

        //     if(y === 0){
        //         y = 21
        //     }

        //     let precioTotal =(x * y) / 100 + x
        //     console.log(`El precio total es de: ${precioTotal}`)

        // }

        // calcularIva(precio, iva);

    //RETO 6 - Crea una función que determine si una letra es una vocal o una consonante.

        // console.log("Introduce la letra que quieres comprobar.")
        // let letra = prompt("Letra: ")

        // letra.toLowerCase()

        // const comprobarVocal = (x) => {
        //     switch(x){
        //         case "a":
        //         case "e":
        //         case "i":
        //         case "o":
        //         case "u":
        //             console.log("Es una vocal.")
        //             break;
        //         default:
        //             console.log("No es una vocal.")
        //     }
        // }

        // comprobarVocal(letra)

    //RETO 7 - Crea una función que, dada una frase, convierta las A en 4, las E en 3, las I en 1 y las O en 0.


        // console.log("Introduce una frase.")
        // let mensaje = prompt("")
        // mensaje = mensaje.toLowerCase()

        // const cambioLetras = (x) => {
        //     let mensajeDividido = mensaje.split('')

        //     for(let i = 0; i < mensajeDividido.length; i++){
        //         switch(mensajeDividido[i]){
        //             case "a":
        //                 mensajeDividido[i] = "4"
        //             case "e":
        //                 mensajeDividido[i] = "3"
        //             case "i":
        //                 mensajeDividido[i] = "1"
        //             case "o":
        //                 mensajeDividido[i] = "0"
        //         }
        //     }

        //     console.log(mensajeDividido)

        // }

        // cambioLetras(mensaje);

    //RETO 8 - Crea una función que, dada una frase, cuente la cantidad de una letra en la misma. Por ejemplo, dada la palabra “javascript” y la letra “a”, debería devolver un 2.

    //RETO 9 - Crea una función que, dado un array de números, devuelva el número más grande del mismo.

        // let arrayNum = []

        // for(i = 0; i )

    //RETO 10 - Crea una función que, dado un array de números, devuelva la suma de todos los números que contiene.

    //RETO 11 - Crea una función que, dados dos números A y B, obtenga el porcentaje(B) de un número(A).

        // console.log("Introduce un número.")
        // let num = Number(prompt("Nº: "))

        // console.log("Introduce un porcentaje.")
        // let por = Number(prompt("Porcentaje: "))

        // const porcentaje = (x, y) => {

        //     let porTotal = (x /100) * y

        //     return porTotal
        // }

        // console.log(porcentaje(num, por))

//KATA NOMBRES ROBOTS.

    // const nombre = (num, pre = "RX") => {

    //     num = parseInt(Math.random() * 1000)

    //     let nom = pre + num

    //     return nom

    // }

    // console.log(nombre())

//EJEMPLO TERNARIAS

    // let nombre = "Alvaro";

    // (nombre === "Alvaro")

    //     ? console.log(true)

    //     : console.log(false)

//ARRAYS.

    // RETO 1 - Dado el array ["A", "B", "C", "D", "E", "F", "G", "H", "I"] crea una función que saque por consola la longitud del array. Crea otra función que obtenga un elemento aleatorio del array y lo saque por consola.

        // let arrayLetras = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

        // const long = (x) => console.log(x.length)

        // long(arrayLetras);

        // let alea = parseInt(Math.random() * (arrayLetras.length - 1) )

        // console.log(arrayLetras[alea]);

    // RETO 2 - Crea un array con los nombres de los planetas del Sistema Solar. Crea una función que los liste y los saque por consola.

        // let sistemaSolar = ["Mercurio", "Venus", "Tierra", "Marte", "Júpiter", "Saturno", "Urano", "Neptuno"]

        // const leerArray = (array) => {

        //     for(i = 0; i < array.length; i++){

        //         console.log(array[i]);

        //     }
        // }

        // leerArray(sistemaSolar);

        //-----------------------

        // sistemaSolar.map(
        //     planeta => console.log(planeta)
        // )

    // RETO 3 - Dado el array javascript1 = ["DOM", "BOM", "Funciones", "Arrays"], elimina "DOM" del array. Añade en su lugar el elemento "Objetos". Elimina el elemento "Arrays". Añade en su lugar el elemento "ArraysDifíciles". Haz una copia del array que solo incluya los últimos dos elementos. Obtén el índice del elemento "Funciones".

        // let javascript1 = ["DOM", "BOM", "Funciones", "Arrays"]

        // console.log(javascript1)

        // //Sustitutir elementos.

        // javascript1.splice(0, 1, "Objetos")

        // console.log(javascript1)

        // javascript1.splice(3, 1, "ArraysDifíciles")

        // console.log(javascript1)

        // //Devolver los dos últimos elementos.

        // let javascript2 = javascript1.slice(2, 4)

        // console.log(javascript2)

        // //Índice del elemento "Funciones."

        // console.log(javascript1.indexOf("Funciones"))

    //RETO 4 -Crea una string, pásala a array y saca por consola la versión invertida de la original. Ejemplo: "Hola" -> [H, o, l, a] -> [a, l, o, H] -> "aloH"

        // let string = "Hola"

        // let array = Array.from(string)

        // console.log(array.reverse())

    //RETO 5 - Crea dos arrays de la misma longitud y una función que cree un nuevo array que intercale sus elementos y vacíe los arrays originales. Por ejemplo, con los arrays arrayUno = [1, 2, 3] y arrayDos = [4, 5, 6] el resultado debería ser [1, 4, 2, 5, 3, 6]

        // let array1 = [1, 2, 3, 4];
        // let array2 = [5, 6, 7, 8];

        // let arrayResultado = [];

        // const intercalarArray = (array1, array2) => {

        //     for(let i = 0; i < array1.length; i++){

        //         arrayResultado.push(array1[i]);
        //         arrayResultado.push(array2[i]);

        //     }
        // }

        // console.log(intercalarArray(array1,array2))

    //RETO 6 - Crea un array con al menos 10 números y una función que los divida en otros dos arrays: uno para pares y otro para impares. A continuación, saca por consola ambos arrays resultantes concatenados.

        // let num = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

        // const dividirArray = (arrayNumeros) => {

        //     let numPares = []
        //     let numImpares = []

        //     for(i = 0; i < arrayNumeros.length; i++){
        //         if(arrayNumeros[i] % 2 === 0){
        //             numPares.push(arrayNumeros[i])
        //         }else{
        //             numImpares.push(arrayNumeros[i])
        //         }
        //     }

        //     let concatenado = numPares.concat(numImpares)

        //     console.log(concatenado)

        // }

        // dividirArray(num)

    //RETO 7 - Utilizando el array del ejercicio anterior, crea una función que saque por consola únicamente los números mayores que 5.

        // let num = [4, 11, 12, 2, 14, 15, 1, 17, 18, 3]

        // const mayoresQueCinco = (array) => {

        //     for(i = 0; i < num.length; i++){

        //         if(array[i] > 5){
        //             console.log(array[i])
        //         }
        //     }
        // }

        // mayoresQueCinco(num)

    //RETO 8 - Dados los arrays javascript1 = ["DOM", "BOM", "Funciones", "Arrays"] y javascript2 = ["Objetos", "Arrays", "ParseInt"], crea una función que determine si se repite algún elemento y lo saque por consola.

        // let javascript1 = ["DOM", "BOM", "Funciones", "Arrays"]
        // let javascript2 = ["Objetos", "Arrays", "ParseInt"]

        // const repeticion = (array1, array2) => {

        //     let palabra

        //     for(let i = 0; i < array1.length; i++){

        //         for(let h = 0; h < array2.length; h++){

        //             if(array1[i] === array2[h]){
        //                 console.log(array1[i])
        //             }

        //         }
        //     }
        // }

        // repeticion(javascript1,javascript2)

    //RETO 9 - Imagina que estamos en una carrera y los nombres de las personas que van llegando a la meta se van almacenando en un array (el primero quedaría en la primera posición del array, el segundo en la segunda, etc.). Crea un array con por lo menos cinco nombres. Desestructura el array utilizando el operador rest de manera que puedas llamar al ganador, al segundo y al resto de competidores por separado.

        