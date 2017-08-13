interface IPersona{
    nombre:string,
    apellido:string
}

let persona:IPersona={
    nombre: "juan",
    apellido:"perez"
}

persona.nombre="puka";
persona.apellido="";

function enviar(xmen:IPersona) {
    console.log(xmen.nombre);
}

enviar(persona);