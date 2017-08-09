function activar(quien: string, objeto: string = "valor defecto", opcional?: string) {

    let nombre: string = "juan";
    let apellido: string = "perez";
    let edad: number = 25;

    let mensaje:string;

    let texto = `Hola, ${nombre} ${apellido} (${edad})`

if (opcional) {
    mensaje = `Hola, ${quien} ${objeto} ${ opcional}`    
} else {
    mensaje = `Hola, ${quien} ${objeto}`
}


    console.log(texto);
    console.log(mensaje);
}

let mensaje:string = "hola";  
const OPCIONES = "todas";
  

if (true) {
    let mensaje = "adios2";
    const OPCIONES = "nada";
}

let spider = {
    nombre: "nada",
    rut: 22121
}

spider ={
    nombre:"asd",
    rut:2212
}

activar("kreator","na");

//funcion flecha
let mifuncion = function (a) {
    return a;
}

let miFuncionF = a =>a;

let mifuncion2 = function (a:number,b:number) {
    return a+b;
}

let hulk = {
    nombre:"Hulk",
    smash(){
        console.log(this.nombre + " smash2...");    
    }
}

hulk.smash();

console.log(mifuncion("Normal"));
console.log(miFuncionF("Flecha"));