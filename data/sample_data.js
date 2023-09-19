export const students = [
  {
    name: "Jill",
    lastname: "Doe",
    age: 23,
    course: "Marketing",
  },
  {
    name: "John",
    lastname: "Doe",
    age: 20,
    course: "Web Development",
  },
  {
    name: "Jack",
    lastname: "Doe",
    age: 22,
    course: "Accounting",
  },
  {
    name: "Ryan",
    lastname: "Ray",
    age: 20,
    course: "Web Development",
  },
  {
    name: "Jane",
    lastname: "Doe",
    age: 21,
    course: "Financial Management",
  },
];

const developers = [
  {
    id: 1,
    name: "John",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS"],
  },
  {
    id: 2,
    name: "Jane",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS"],
  },
  {
    id: 3,
    name: "Jack",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS"],
  },
];

export const points = [
  100, 20, 30, 44, 55, 70, 90, 10, 30, 45, 60, 80, 100, 100,
];

//El método forEach() nos permite recorrer un arreglo, realizando alguna acción en para cada elemento.

//Para recorrer de manera imperativa un arreglo
for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}
//-----------------------------------------------------------


//Para recorrer de manera funcional
students.forEach(function (student) {console.log(student)});
//arreglo.forEach(function(elemento, index, arreglo)); no guarda nada solo muestra
//-----------------------------------------------------------


// Guardar un arreglo de un forEach y sacar datos especificos del arreglo de objeto
let fullName = [];

students.forEach(student => {
  fullName.push(student.name + ' ' + student.lastname);
})
console.log(fullName);
//-----------------------------------------------------------


//El método map() también nos permite recorrer un arreglo y realizar una acción por cada elemento. La diferencia es que este método devuelve un nuevo arreglo los elementos modificados.
// es una funcion pura (no altera datos)
let fullNameMap = students.map(function (student) {
  return student.name + ' ' + student.lastname;
})

console.log(fullNameMap)

//-----------------------------------------------------------
// funcion flecha map
let names = students.map(student => student.name);
console.log(names);
//-----------------------------------------------------------

//Cambiar propiedades del arreglo de objetos
let newArray = students.map(student =>{
  return{
    fullnameArray: student.name + ' ' + student.lastname,
    age: student.age,
    course: student.course 
  }
})
console.log(newArray);

//agregar dato al arreglo
// ... este comando es para no repetir los atributos del arreglo

let newArray2 = students.map(student =>{
  return{
    ...student,
    title: student.name + ' - ' + student.course
  }
})
console.log(newArray2);
//-----------------------------------------------------------
// sin poner el raturn y modificando el valor al objeto

let newArray3 = students.map(student =>({
    ...student,
    course: 'Programming'
}))
console.log(newArray3);

let doubleAge = students.map(student => ({...student, age: student.age * 2}));
console.log(doubleAge);

//metodo filter

// Forma imperativa
let developersWeb = [];

for (let i = 0; i < students.length; i++) {
  if (students[i].course === 'Web Development') {
    developersWeb.push(students[i]);
  }
}
console.log(developersWeb);

//Forma funcional
let result = students.filter(function (student) {
  if (student.course === 'Web Development') {
    return true;
  }
})
console.log(result);

//con flecha
let result2 = students.filter(student => student.course !== 'Web Development');
console.log(result2);
//-----------------------------------------------------------

//metodo reduce tiene 4 parametros (acumulador, elemento, index, arreglo) se utiliza para iterar los elementos de un arreglo y reducirlos a un solo valor

// forma imperativa
let total = 0;

for (let i = 0; i < students.length; i++) {
  total += students[i].age;
}
console.log(total);

//Forma declarativa funcional
let resultReduce = students.reduce(function (total, student) {
  return total + student.age;
}, 0)
console.log(resultReduce)

//con flecha

let resultReduce2 = students.reduce((total, student) => total + student.age, 0);
console.log(resultReduce2);
//-----------------------------------------------------------
// retorna un arreglo de arreglo
let resultDev = developers.reduce(function (allSkill, student) {
  return [...allSkill, student.skills]
},[]);

console.log(resultDev);
//retorna un arreglo con los elementos de las skill
let resultDev2 = developers.reduce(function (allSkill, student) {
  return [...allSkill, ...student.skills]
},[]);

console.log(resultDev2);
//retorna un objeto Set que limpia los elementos repetidos (no es un arreglo)
let resultDev3 = developers.reduce(function (allSkill, student) {
  return new Set([...allSkill, ...student.skills])
},[]);

console.log(resultDev3);
//retorna un arreglo filtrado de Set sin elementos repetidos
let resultDev4 = developers.reduce(function (allSkill, student) {
  return Array.from(new Set([...allSkill, ...student.skills]))
},[]);

console.log(resultDev4);
//-----------------------------------------------------------

// metodo sort(fisrt, second) compara el primer elemento con el segundo tiene dos parametros
let metodoSort = students.sort(function (first, second) {
  if(first.age > second.age){
    return 1;
  }else{
    return -1;
  }
});
console.log(metodoSort);
// con flecha
let metodoSort2 = students.sort((a, b) => a.age < b.age ? 1 : -1)
console.log(metodoSort2)
//ejemplo con un arreglo de numeros la resta los ordena de menor a mayor
let numbers = [10, 30, 1000, 100];
console.log(numbers.sort((a, b) => a - b));
//-----------------------------------------------------------

//metodo find busca la primer coincidencia y retorna el objeto
let resultFind = students.find(function (student) {
  if (student.name === 'Ryan') {
    return 1
  }
})
console.log(resultFind)
//otro ejemplo
let resultFind2 = students.find(function (student) {
  if (student.age === 20) {
    return 1
  }
})
console.log(resultFind2)
//con flecha
let resultFind3 = students.find(student => student.name === 'Ryan');
console.log(resultFind3);
//-----------------------------------------------------------

//metodo some retorna un valor booleano de un arreglo
let resultSome = students.some(function (student) {
  if(student.lastname === 'Doe'){
    return true;
  }
})
console.log(resultSome);
//con flecha
let resultSome2 = students.some(student => student.lastname === 'Doe');
console.log(resultSome2);
//-----------------------------------------------------------

//metodo every pregunta si todos los objetos cumplen una condicion es el contrario de some (devuelve un booleano)
let resultEvery = students.every(student => student.age === 20)
console.log(resultEvery);
// otro ejemplo
let resultEvery2 = students.every(student => student.name.includes('J'));
console.log(resultEvery2);
//-----------------------------------------------------------

//aplicando lo aprendido
let resultGod = students.map(student =>{
  return{
    student: student.name + ' ' + student.lastname,
    age: student.age
  }
}) //crea un arreglo que lo guardo en una variable
  .filter(student => student.age > 20) //filtra 
  .sort((a,b) => b.age - a.age) //ordena de mayor a menor
  .reduce((total,student) => total + student.age, 0)
console.log(resultGod);