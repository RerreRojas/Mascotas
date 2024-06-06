document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();

        // Obtener los valores de los campos del formulario
        let propietarioNombre = document.getElementById("propietario").value;
        let telefono = document.getElementById("telefono").value;
        let direccion = document.getElementById("direccion").value;
        let nombreMascota = document.getElementById("nombreMascota").value;
        let tipo = document.getElementById("tipo").value;
        let enfermedad = document.getElementById("enfermedad").value;

        // Crear el objeto Propietario
        let propietario = new Propietario(propietarioNombre, direccion, telefono);

        // Crear el objeto Mascota
        let mascota = new Mascota(nombreMascota, enfermedad);
        mascota._tipo = tipo;

        // Mostrar los resultados
        let resultado = document.querySelector("#resultado ul");
        resultado.innerHTML = `
            <li>${propietario.datosPropietario()}</li>
            <li>El nombre de la mascota es: ${mascota.nombre}
            El tipo de animal es un: ${mascota._tipo}
            La enfermedad es: ${mascota._enfermedad}</li>
        `;
    });
});

class Propietario {
    constructor(nombre, direccion, telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }
    datosPropietario() {
        return `El nombre del dueño es: ${this.nombre}. El domicilio es: ${this.direccion} y el número telefónico de contacto es: ${this.telefono}`;
    }
}

class Animal extends Propietario {
    constructor(nombre, direccion, telefono, tipo) {
        super(nombre, direccion, telefono);
        this._tipo = tipo;
    }
    get tipo() {
        return `El tipo de animal es un: ${this._tipo}.`;
    }
}

class Mascota extends Animal {
    constructor(nombre, enfermedad) {
        super();
        this._nombre = nombre;
        this._enfermedad = enfermedad;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nuevo_nombre) {
        this._nombre = nuevo_nombre;
    }
}

/*function agregarDatos () {};

let dueno1 = new Propietario("Pedrito", "Camino El Manzano 33", "123456");
console.log (dueno1.datosPropietario())*/


/*let motorCA = new CA("7566DGD", "ABB", "2HP", "CA", "Monofasico", "50Hz");
console.log(motorCC.datosMotor());
console.log(motorCC.tipoCorriente());
console.log(motorCA.datosMotor());
console.log(motorCA.tipoCorriente());


tipoAnimal () {document.getElementById("tipo").addEventListener("change", function() {
    let tipoDeAnimal = this.options[this.selectedIndex].value;
  
    document.querySelector("#resultado").textContent = tipoDeAnimal; // Actualiza el contenido del elemento con la clase 'resultado'
  });}


*/
