// clases

class Prueba {
    constructor(nombre, nota, ponderado) {
        this.nombre = nombre;
        this.nota = nota;
        this.ponderado = ponderado;
    }
}

class SistemaNotaFinal {
    constructor() {
        this.pruebas = [];
    }
// Agregamos pruebas al array
    agregarPrueba(prueba) {
        this.pruebas.push(prueba);
    }

    validarPonderados() {
        // funcion de orden superior para la suma valor ponderado
        let sumaPonderados = this.pruebas.reduce((suma, prueba) => suma + prueba.ponderado, 0);
        return sumaPonderados === 1;
    }

    calcularNotaFinal() {
        if (!this.validarPonderados()) {
        alert("La suma de los ponderados de las pruebas no es igual a 1. Ajusta los ponderados.");
        return;
    }
// funcion de orden superior para calculo de la nota final
      let notaFinal = this.pruebas.reduce((suma, prueba) => suma + prueba.nota * prueba.ponderado, 0);
        alert("La nota final es: " + notaFinal);
    }
}

// le damos las propiedades de la clase SistemaNotaFinal a la const sistema
const sistema = new SistemaNotaFinal();

let opcion;

// ciclo
do {
    opcion = prompt("Selecciona una opción:\n1. Agregar nota\n2. Eliminar nota y buscar por nombre\n3. Calcular nota final\n4. Salir");

    switch (opcion) {
        case "1":
            let nombre = prompt("Ingrese el nombre de la prueba:");
            let nota = parseFloat(prompt("Ingrese la nota de la prueba:"));
            let ponderado = parseFloat(prompt("Ingrese el ponderado de la prueba (como decimal):"));
            sistema.agregarPrueba(new Prueba(nombre, nota, ponderado));
            break;

        case "2":
            // uso de find para eliminar la prueba ya agregada anteriormente, en caso de no existir manda mensaje de ello
            let nombrePruebaEliminar = prompt("Ingrese el nombre de la prueba que desea eliminar:");
            let pruebaEncontrada = sistema.pruebas.find(prueba => prueba.nombre === nombrePruebaEliminar);
                if (pruebaEncontrada) {
                    const indicePrueba = sistema.pruebas.indexOf(pruebaEncontrada);
                    sistema.pruebas.splice(indicePrueba, 1);
                    alert(`La prueba "${nombrePruebaEliminar}" ha sido eliminada correctamente.`);
                }   
                else {
                    alert(`No se encontró ninguna prueba con el nombre "${nombrePruebaEliminar}".`);
                }
            break;
            

        case "3":
            sistema.calcularNotaFinal();
            break;

        case "4":
            alert("Saliendo del programa.");
            break;

        default:
            alert("Opción no válida. Por favor, selecciona una opción válida.");
    }
} while (opcion !== "4");













