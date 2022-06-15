let nombre= prompt ("Ingrese su nombre y apellido");
let edad= prompt ("Ingrese su edad");
let dni= prompt ("Ingrese su D.N.I");
let telefono= prompt ("Ingrese su teléfono");
let correo= prompt ("Ingrese su correo electrónico");

//Array de productos
const productos = [
{
    id:01, 
    nombre: "Metafísica",
    editorial:"Gredos",
    autor:"Aristóteles",
    anio:"1999",
    descripción: "Clásico libro de metafísica",
    precio:7800,
    foto:"#",
    categoría: "Filosofía",
}, 
{
    id:02, 
    nombre: "El Banquete",
    editorial:"Gredos",
    autor:"Platón",
    anio:"1965",
    descripción: "Clásico libro sobre el tema del amor",
    precio:3450,
    foto:"#",
    categoría: "Filosofía",
}, 
{
    id:03, 
    nombre: "Psicopolítica",
    editorial:"Herder",
    autor:"Byul Chung Han",
    anio:"2017",
    descripción: "Innovador libro sobre las politicas totalitarias",
    precio:3200,
    foto:"#",
    categoría: "Política",
}, 
{
    id:04, 
    nombre: "La condición humana",
    editorial:"Paidós",
    autor:"Hannah Arend",
    anio:"1994",
    descripción: "Gran libro sobre la vida humana y su acción",
    precio:5500,
    foto:"#",
    categoría: "Filosofía",
}, 
{
    id:05, 
    nombre: "La ilíada",
    editorial:"Gredos",
    autor:"Hesíodo",
    anio:"2002",
    descripción: "Clásico libro poético de la literatura griega antigua",
    precio:8000,
    foto:"#",
    categoría: "Poesía",
}, 
{
    id:06, 
    nombre: "La Odisea",
    editorial:"Gredos",
    autor:"Homero",
    anio:"2002",
    descripción: "Continuación de la Ilíada de Hesíodo, gran poema de la vuelta de Ulises a su hogar.",
    precio:7800,
    foto:"#",
    categoría: "Poesía",
}, 
{
    id:07, 
    nombre: "La Eneada",
    editorial:"Gredos",
    autor:"Virgilio",
    anio:"1999",
    descripción: "Clásico de la literatura romana, continuación de la Odisea",
    precio:9500,
    foto:"#",
    categoría: "Poesía",
}, 
{
    id:08, 
    nombre: "Divina Comedia",
    editorial:"Gredos",
    autor:"Dante Alighieri",
    anio:"1964",
    descripción: "Clásico libro de la época medieval",
    precio:4700,
    foto:"#",
    categoría: "Literatura medieval",
}, 
{
    id:09, 
    nombre: "Confesiones",
    editorial:"Gredos",
    autor:"San Agusín",
    anio:"2000",
    descripción: "Clásico libro de la época patrística",
    precio:6700,
    foto:"#",
    categoría: "Filosofía",
}, 
{
    id:10, 
    nombre: "Apología de Sócrates",
    editorial:"Gredos",
    autor:"Platón",
    anio:"1975",
    descripción: "Clásico libro de la vida de Sócrates",
    precio:3400,
    foto:"#",
    categoría: "Filosofía",
}, 
];

//Parametros para cotizar//

 

//carrito de compras
let carrito = []; 

// //parametros para subir al carrito



function cotizar(){
    let tipo_libro=(prompt("Elija el libro que desea: \r1- Metafísica\r2- EL Banquete\r3- Psicopolítica\r4- La Condición Humana\r5- La Iliada \r6- La Odisea\r7- La Eneada\r8- La Divina Comedia\r9- Confesiones\r10- Apología de Sócrates"));
    let cantidad_libro=(prompt("Elija la cantidad que desea comprar"));
    switch(tipo_libro){
        case "1":
        let metafisica = productos[0].precio * cantidad_libro
        carrito.push(metafisica);
        break;
        case "2":
        let add1= productos[1].precio * cantidad_libro
        carrito.push(add1);
        break;
        }
}
    cotizar();
    alert=(carrito);
  


//         case "3":
//         let add2= productos[2].precio * cantidad_libro
//         carrito.push(add2);
//         break;
//         case "4":
//         let add3= productos[3].precio * cantidad_libro
//         carrito.push(add3);
//         break;
//         case "5":
//         let add4= productos[4].precio * cantidad_libro
//         carrito.push(add4);
//         break;
//         case "6":
//         let add5= productos[5].precio * cantidad_libro
//         carrito.push(add5);
//         break;
//         case "7":
//         let add6= productos[6].precio * cantidad_libro
//         carrito.push(add6);
//         break;
//         case "8":
//         let add7= productos[7].precio * cantidad_libro
//         carrito.push(add7);
//         break;
//         case "9":
//         let add8= productos[8].precio * cantidad_libro
//         carrito.push(add8);
//         break;
//         case "10":
//         let add9= productos[9].precio * cantidad_libro
//         carrito.push(add9);
//         break;
//     }
// //Cotizador//
// console.log(carrito);



// alert("Hola!! El precio final de su presupuesto es: $" + resultado + "\r" + "\r" +  "Muchas gracias por su pedido" + "\r" + "Datos personales" + "\r" + "Nombre: " + nombre + "\r" + "Edad: " + edad + "\r" + "D.N.I: " + dni + "\r" + "Teléfono: : " + telefono + "\r" + "Correo electrónico: " + correo );
