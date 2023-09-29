let menu = "MENU\n\n"; 
menu+= "1- Consultar por una prestacion en particular\n";
menu+= "2- Total de prestaciones valorizadas\n";
menu+= "3- Insertar una prestacion\n";
menu+= "4- Salir\n";
menu+= "Ingrese una opcion\n\n";

let opcion=0;


do{
    opcion=Number(prompt(menu));
    
    switch (opcion) {
        case 1:
            filtraUnaPrestacion();

            break;
        case 2: 
            mostrarTotalPrestaciones();

            break;
        case 3:
            insertarPrestacion();
            break;    
        case 4:
            console.log("Usted ha salido");
            break;
        default:console.log("La opcion no es correcta");
            break;
    }

}while(opcion!=4);


function mostrarTotalPrestaciones(){
    prestaciones.forEach(prestacion => console.table(prestacion.cobertura+" - "+prestacion.plan+"- "+prestacion.descripcion+" - "+ 
    prestacion.codigo+" - "+prestacion.especialidad+" - "+"$"+prestacion.precio))
};


function filtraUnaPrestacion(){
alert("CONSULTA DE VALORES DE PRESTACIONES");

let coberturaElegida = prompt("Ingrese la cobertura que desea consultar").toUpperCase();
let descPrestacionElegida = prompt ("Ingrese la descripcion de la prestacion que desea consultar").toUpperCase();
let planElegido= Number( prompt("Ingrese plan a consultar"));
let especialidadElegida =prompt("Ingrese la especialidad").toUpperCase();



const resultado = prestaciones.filter(prestacion => prestacion.cobertura == coberturaElegida && prestacion.descripcion 
    == descPrestacionElegida && prestacion.plan == planElegido && prestacion.especialidad == especialidadElegida )
if (resultado.length>0){
    console.table(resultado);
}else {
    console.error("sin resultados")
}
};
    

function insertarPrestacion(){


prestaciones.push(
      {cobertura: prompt("Ingrese la cobertura que desea agregar").toUpperCase(),
       plan: Number(prompt("Ingrese plan a agregar")),
       codigo: Number("Ingrese el codigo"),
       descripcion:prompt ("Ingrese la descripcion de la prestacion que desea agregar").toUpperCase(),
       especialidad:prompt("Ingrese la especialidad").toUpperCase(),
       precio: Number(prompt("Ingrese el valor")),}
)

}

