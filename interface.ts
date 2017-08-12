interface IPersona{
    nombre:string,
    apellido:string
}

let persona:IPersona={
    nombre: "jose",
    apellido:"bascunan"
}

persona.nombre="puka";
persona.apellido="";

function enviar(xmen:IPersona) {
    console.log(xmen.nombre);
}

enviar(persona);