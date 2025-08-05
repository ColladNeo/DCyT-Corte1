/**
*10. INGRESOS PERSONAS
*Dado el nombre y el ingreso de varias personas. Determinar e imprimir: el monto del ingreso
*menor y el ingreso promedio.
*Se dispone de los siguientes datos de varias personas: (nombre, ingreso) (Mary, 150),
*(José, 135), (Carlos, 160), (Pedro, 75)
*Monto del ingreso menor: 75$
*Ingreso promedio: 130$
*/
import CL_Persona from "./Cl_Persona.js";
import CL_Grupo from "./CL_Grupo.js";
const persona1 = new CL_Persona("Mary", 150);
const persona2 = new CL_Persona("José", 135);
const persona3 = new CL_Persona("Carlos", 160);
const persona4 = new CL_Persona("Pedro", 75);
const grupo = new CL_Grupo();
grupo.procesarPersona(persona1);
grupo.procesarPersona(persona2);
grupo.procesarPersona(persona3);
grupo.procesarPersona(persona4);
alert(`Monto del ingreso menor:.${grupo.menorIngreso()}`);
alert(`Ingreso promedio:.${grupo.PromedioIngreso()}`);
console.log(`Monto del ingreso menor:.${grupo.menorIngreso()}`);
console.log(`Ingreso promedio:.${grupo.PromedioIngreso()}`);
let salida = document.getElementById("salida");
if (salida !== null) {
    salida.innerHTML = `Monto del ingreso menor: ${grupo.menorIngreso()}$<br>Ingreso promedio: ${grupo.PromedioIngreso()}$`;
}
else
    console.error("No se pudo encontrar el elemento con el id 'salida'.");
console.log('Salida actualizada en el elemento HTML con id "salida".');
