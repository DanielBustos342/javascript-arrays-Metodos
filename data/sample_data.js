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
console.log("---------Metodo forEach (con el iterador for)----------")
for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}
//-----------------------------------------------------------


//Para recorrer de manera funcional
console.log("---------Metodo forEach (de una sola linea)----------")
students.forEach(function (student) {console.log(student)});
//arreglo.forEach(function(elemento, index, arreglo)); no guarda nada solo muestra
//-----------------------------------------------------------


// Guardar un arreglo de un forEach y sacar datos especificos del arreglo de objeto
console.log("---Metodo forEach (saca datos especificos del arreglo de objetos---")
let fullName = [];

students.forEach(student => {
  fullName.push(student.name + ' ' + student.lastname);
})
console.log(fullName);
//-----------------------------------------------------------


//El método map() también nos permite recorrer un arreglo y realizar una acción por cada elemento. La diferencia es que este método devuelve un nuevo arreglo los elementos modificados.
// es una funcion pura (no altera datos)
console.log("---------Metodo map()----Nombre y apellido------")
let fullNameMap = students.map(function (student) {
  return student.name + ' ' + student.lastname
});
console.log(fullNameMap)

//-----------------------------------------------------------
// funcion flecha map
console.log("---------Metodo forEach----Nombres------")
let names = students.map(student => student.name);
console.log(names);
//-----------------------------------------------------------

//Cambiar propiedades del arreglo de objetos
console.log("---Metodo map()---crea un nuevo arreglo de objetos---")
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
console.log("---Metodo map()--- ... repite los atributos del arreglo y le agrego un elemento")
let newArray2 = students.map(student =>{
  return{
    ...student,
    title: student.name + ' - ' + student.course
  }
})
console.log(newArray2);
//-----------------------------------------------------------
// sin poner el raturn y modificando el valor al objeto
console.log("---Metodo map()---Sin poner el return y modificar el elemento del objeto")
let newArray3 = students.map(student =>({
    ...student,
    course: 'Programming'
}))
console.log(newArray3);
console.log("---Metodo map()---flecha Sin poner el return y modificar el elemento del objeto edad x2")
let doubleAge = students.map(student => ({...student, age: student.age * 2}));
console.log(doubleAge);

//metodo filter
console.log("---Metodo filter()--- con for if y solo toma las que cumplen la condicion (course)")
// Forma imperativa
let developersWeb = [];

for (let i = 0; i < students.length; i++) {
  if (students[i].course === 'Web Development') {
    developersWeb.push(students[i]);
  }
}
console.log(developersWeb);
console.log("---Metodo filter()--- arma un arreglo con un elemento determinado")
//Forma funcional
let result = students.filter(function (student) {
  if (student.course === 'Web Development') {
    return true;
  }
})
console.log(result);
console.log("---Metodo filter()--- con flecha arma un arreglo con un elemento determinado")
//con flecha
let result2 = students.filter(student => student.course !== 'Web Development');
console.log(result2);
//-----------------------------------------------------------

//metodo reduce tiene 4 parametros (acumulador, elemento, index, arreglo) se utiliza para iterar los elementos de un arreglo y reducirlos a un solo valor
console.log("---Metodo reduce() con for---")
// forma imperativa
let total = 0;

for (let i = 0; i < students.length; i++) {
  total += students[i].age;
}
console.log(total);
console.log("Metodo reduce()tiene 4 parametros (acumulador, elemento, index, arreglo) se utiliza para iterar los elementos de un arreglo y reducirlos a un solo valor")
//Forma declarativa funcional
let resultReduce = students.reduce(function (total, student) {
  return total + student.age;
}, 0)
console.log(resultReduce)

//con flecha
console.log("---Metodo reduce() con flecha")
let resultReduce2 = students.reduce((total, student) => total + student.age, 0);
console.log(resultReduce2);
//-----------------------------------------------------------
// retorna un arreglo de arreglo
console.log("---Metodo reduce() retorna un arreglo de arreglo")
let resultDev = developers.reduce(function (allSkill, student) {
  return [...allSkill, student.skills]
},[]);

console.log(resultDev);
//retorna un arreglo con los elementos de las skill
console.log("---Metodo reduce() retorna una arreglo de elementos")
let resultDev2 = developers.reduce(function (allSkill, student) {
  return [...allSkill, ...student.skills]
}, []);
console.log(resultDev2);

//retorna un objeto Set que limpia los elementos repetidos (no es un arreglo)
console.log("---Metodo reduce() retorna un objeto Set que limpia los elementos repetidos(no es un arreglo)")
let resultDev3 = developers.reduce(function (allSkill, student) {
  return new Set([...allSkill, ...student.skills])
}, []);
console.log(resultDev3);
//retorna un arreglo filtrado de Set sin elementos repetidos
console.log("---Metodo reduce() retorna un arreglo filtrado por Set que no se repiten los elementos")
let resultDev4 = developers.reduce(function (allSkill, student) {
  return Array.from(new Set([...allSkill, ...student.skills]))
}, []);
console.log(resultDev4);
//-----------------------------------------------------------

// metodo sort(fisrt, second) compara el primer elemento con el segundo tiene dos parametros
console.log("---Metodo sort(first, second) comprar el primer elemento con el segundo tiene dos parametros")
let metodoSort = students.sort(function (first, second) {
  if(first.age > second.age){
    return 1;
  }else{
    return -1;
  }
});
console.log(metodoSort);
// con flecha
console.log("---Metodo sort(first, second) comprar el primer elemento con el segundo tiene dos parametros con flecha")
let metodoSort2 = students.sort((a, b) => a.age < b.age ? 1 : -1)
console.log(metodoSort2)
//ejemplo con un arreglo de numeros la resta los ordena de menor a mayor
console.log("---Metodo sort(first, second) ejemplo con un arreglo de numeros la resta los ordena de menor a mayor")
let numbers = [10, 30, 1000, 100];
console.log(numbers.sort((a, b) => a - b));
//-----------------------------------------------------------

//metodo find busca la primer coincidencia y retorna el objeto
console.log("---Metodo find() busca la primer coincidencia y retorna el objeto")
let resultFind = students.find(function (student) {
  if (student.name === 'Ryan') {
    return 1
  }
})
console.log(resultFind)
//otro ejemplo
console.log("---Metodo find() otro ejemplo")
let resultFind2 = students.find(function (student) {
  if (student.age === 20) {
    return 1
  }
})
console.log(resultFind2)
//con flecha
console.log("---Metodo find()con flecha otro ejemplo")
let resultFind3 = students.find(student => student.name === 'Ryan');
console.log(resultFind3);
//-----------------------------------------------------------

//metodo some retorna un valor booleano de un arreglo
console.log("---Metodo some() retorna un valor booleano de un arreglo")
let resultSome = students.some(function (student) {
  if(student.lastname === 'Doe'){
    return true;
  }
})
console.log(resultSome);
//con flecha
console.log("---Metodo some() con flecha retorna un valor booleano de un arreglo")
let resultSome2 = students.some(student => student.lastname === 'Doe');
console.log(resultSome2);
//-----------------------------------------------------------

//metodo every pregunta si todos los objetos cumplen una condicion es el contrario de some (devuelve un booleano)
console.log("---Metodo every() pregunta si todos los objetos cumplen una condicion es el contrario de some (devuelve un booleano)")
let resultEvery = students.every(student => student.age === 20)
console.log(resultEvery);
// otro ejemplo
console.log("---otro ejemplo Metodo every() pregunta si todos los objetos cumplen una condicion es el contrario de some (devuelve un booleano)")
let resultEvery2 = students.every(student => student.name.includes('J'));
console.log(resultEvery2);
//-----------------------------------------------------------

//aplicando lo aprendido
console.log("Aplicando lo aprendido")
let resultGod = students.map(student =>{
  return{
    student: student.name + ' ' + student.lastname,
    age: student.age
  }
})
  console.log('crea un arreglo que lo guardo en una variable')
  console.log(resultGod) //crea un arreglo que lo guardo en una variable
  console.log('---------------------------')
  let resultGod2 = students.map(student =>{
    return{
      student: student.name + ' ' + student.lastname,
      age: student.age
    }
  })
  .filter(student => student.age > 20)
  console.log('filtra los mayores a 20')
  console.log(resultGod2) //filtra 
  console.log('---------------------------')
  let resultGod3 = students.map(student =>{
    return{
      student: student.name + ' ' + student.lastname,
      age: student.age
    }
  })
  .filter(student => student.age > 20)
  .sort((a,b) => b.age - a.age) 
  console.log('ordena de mayor a menor')
  console.log(resultGod3)//ordena de mayor a menor
  console.log('---------------------------')

  let resultGod4 = students.map(student =>{
    return{
      student: student.name + ' ' + student.lastname,
      age: student.age
    }
  })  
  .filter(student => student.age > 20)
  .sort((a,b) => b.age - a.age)
  .reduce((total,student) => total + student.age, 0)
  console.log('suma todos los age');
  console.log(resultGod4);