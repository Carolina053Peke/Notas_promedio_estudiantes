/*var resultadoNota = 0
let boletines = []

function Boletin( materia, nota1, nota2){
    this.materia = materia
    this.nota1 = nota1
    this.nota2 = nota2
    this.promedio = function(){
        let resultado = (this.nota1 + this.nota2)/2;
        
        resultadoNota = resultado;  
    }
}

boletines.push(boletin1)
console.log(boletines)

boletin1.promedio()
*/

let inputValues = {
    nombre: "",
    apellido: "",
    materia: "",
    nota1: "",
    nota2: ""
  };
  
const formData = [];
  
const inputs = document.querySelectorAll(".input"); 
const form = document.querySelector("form"); 
const div = document.querySelector("#resultado");
const btnLimpiar = document.querySelector('.limpiar');


console.log(inputs)

inputs.forEach(function(input) {
    input.addEventListener("blur", function(event) {
      
      inputValues = {
        ...inputValues, 
        [event.target.name]: event.target.value 
      };
      console.log(inputValues); 
    });
  });
  
form.addEventListener("submit", function(event) {
  event.preventDefault(); 
  formData.push(inputValues); 
    
  inputValues = {
      nombre: "",
      apellido: "",
      materia: "",
      nota1: "",
      nota2: "",
  };
  
  formData.forEach(function(data) {
      div.innerHTML += `
        <div class="contenedor_resultado">
          <h2>Mi nombre es ${data.nombre} ${data.apellido}</h2>
          <h5>Estoy cursando la materia: ${data.materia}</h5>
          <p>Tu promedio es: ${(Number(data.nota1) + Number(data.nota2))/2}</p>
        </div>
      `;
  })
})

btnLimpiar.addEventListener('click', function(event) {
  inputValues = {
    nombre: "",
    apellido: "",
    materia: "",
    nota1: "",
    nota2: "",
  };
  inputs.forEach(function(input) {
    input.value = ''
  })
})