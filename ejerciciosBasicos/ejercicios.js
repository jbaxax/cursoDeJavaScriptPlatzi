/* nombre: string
Apellido: string
Nombre de usuario en Platzi: strig (@fulanito)
Edad: number
Correo electrónico: string (lala@gmail.com)
Mayor de edad: boolean
Dinero ahorrado: number
Deudas: number */

let nombre = 'Walter';
let apellido = 'Jave';
let username = 'jbaxax';
let edad = 21;
let mail = 'walterjave92@gmail.com'
let esMayorDeEdad = true;
let dineroAhorrado = 100;

let nombreCompleto = nombre + " " + apellido;


/* FUNCIONES */

function nombreComplet(name, lastname) {
    return nombre + '' + lastname
}
nombre('Walter', 'Jave');

function saludo(name, lastname, nickname) {
    const completeName = nombreComplet(name, lastname);
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

}

/* CONDICIONALES */
/* switch */
const suscripcion = "Basic";

switch (suscripcion) {
    case "Free":
        console.log("Solo puedes tomar los cursos gratis");
        break;
    case "Basic":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        break;
    case "Expert":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        break;
    case "ExpertDuo":
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        break;
}
/* if else */
if (suscripcion == "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} else if (suscripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (suscripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (suscripcion == "ExpertDuo") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

/* CICLOS */
/* 1 */
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
let i = 0;
while (i < 5) {
    console.log("El valor de i es: " + i);
    i++;
}
/* 2 */
for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
let a = 10;
while (a >= 2) {
    console.log("El valor de i es: " + i);
    i--;
}

/* Escribe un código en JavaScript que le pregunte a los usuarios cuánto es `2 + 2`. 
Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal,
 volvemos a empezar. */
let respuesta;
while (respuesta != '4') {
    let pregunta = prompt('Cuanto es 2+2?')
    respuesta = pregunta;
}

/* ARRAY */

const array = [1, 'jaj', true, false, { nombre: 'lala', edad: 3 }];


const obj = {
    nombre: 'Funalito',
    edad: 3,
    comidasFavoritas: ['Pollo Frito', 'vegetales']
};

/*  */
function imprimirPrimerElementoArray(arr) {
    console.log(arr[0]);
}
imprimirPrimerElementoArray(['ja', 'e', '3', 'p', 'd'])
/*  */

function imprimirElementoPorElemento(ary) {
    for (let i = 0; i < ary.length; i++) {
        const element = ary[i];
        console.log(element);
        /* 
        console.log(ary[i]);
        */
    }

}

imprimirElementoPorElemento(['ja', 'e', '3', 'p', 'd'])
/*  */

const obj1 = {
    nombre: 'Funalito',
    edad: 3,
    comidasFavoritas: ['Pollo Frito', 'vegetales']
};

Object.values(obj1)

/* IMPIMIR EL OBJETO 1x1    */
function imprimir(aryes) {

    const arr = Object.values(obj1);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }

}

imprimir(obj1)


function conseguirTipoSuscriptcion(suscripcion) {
    if (suscripcion == "Free") {
        console.log("Solo puedes tomar los cursos gratis");
        return;
    } if (suscripcion == "Basic") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    } if (suscripcion == "Expert") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return;
    } if (suscripcion == "ExpertDuo") {
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        return;
    }

    console.warn('no existe');
}

const tipos = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    expertduo: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
};


tipos.free;
/* ó */
tipos['free']

const ejemploSuscripcion =  'free';

tipos[ejemploSuscripcion]


function conseguirTipoSus(suscripcion){
    if(tipos[suscripcion]){
        console.log(tipos[suscripcion])
        return;
    }
    console.warn('no existe')
}