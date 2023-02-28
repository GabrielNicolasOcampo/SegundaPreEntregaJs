//Implementación del login
const usuario = "nicolas";
const pass = "123"
let usuarioIngresado;
let passIngresado;

while (usuarioIngresado != usuario || passIngresado != pass) {
    usuarioIngresado = prompt('ingresá tu usuario');
    passIngresado = prompt('ingresá tu contraseña')
}

alert("Ingresaste correctamente");


let toDos = [];

// Clase constructora de tareas a realizar
class ToDo {
    constructor(descripcion, fechaCreacion, fechaLimite, prioridad) {
        this.descripcion = descripcion;
        this.fechaCreacion = fechaCreacion;
        this.fechaLimite = fechaLimite;
        this.prioridad = prioridad;
    }
}

// Función que agrega una tarea a la lista
const agregarToDo = () => {
    const descripcion = prompt('Ingresá lo que solicitas para tu diseño web');
    const fechaLimite = prompt('Ingresá la fecha limite para que terminemos tu proyecto web');
    const fechaCreacion = new Date()
    const prioridad = prompt('Ingresá la prioridad con la cual necesitas tu proyecto terminado (opciones: alta, media, baja');
    const nuevaTarea = new ToDo(descripcion, fechaCreacion, fechaLimite, prioridad)
    toDos.push(nuevaTarea)
    opciones(toDos)
};

// Función que da las opciones del simulador
const opciones = (toDos) => { 
    let descripciones = "";
    toDos.forEach(element => {
        descripciones = descripciones + "\n" + element.descripcion + " " + element.fechaCreacion.getDate() + "/" + element.fechaCreacion.getMonth() + "/" + element.fechaCreacion.getFullYear();
    });
    const listaOpciones = prompt(`Esto es todo lo que pediste para tu proyecto:\n${descripciones}\n\nque te pareceria si :  \n1 : para agregar algo mas a tu pedido\n2 para para visualizar tus pedidos de prioridad ALTA\n3 Terminar y continuar al portafolio`)
    switch (listaOpciones) {
        case "1":
            agregarToDo();
            break;
        case "2":
            filtro();
            break;
        case "3":
            borraListado();
            break;
        default:
            opciones(toDos)
    }
};



// Función que permite filtrar por prioridad alta
const filtro = (tareas) => {
    //const prioritarias = toDos.filter((toDo)=>toDo.prioridad === "alta")
    const prioritarias = toDos.filter((element) => element.prioridad === "alta")
    let descripcionPrioritarias = "";
    prioritarias.forEach(element => {
        descripcionPrioritarias = descripcionPrioritarias + "\n" + element.descripcion;
    })

    alert(`Estos son tus pedidos con una prioridad ALTA:\n${descripcionPrioritarias}\n\n`)
    opciones(toDos)
};

// Función que borra el listado de tareas
const borraListado = () => {
    toDos = [];
    // opciones(toDos);
}

// Función que inicia el proceso
const init = () => {
    agregarToDo()
}

init()