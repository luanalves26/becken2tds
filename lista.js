const alunos = ["Alice" ,"Bruna" , "Carla"];

alunos.push("Diego");
alunos.unshift("Lopes");
console.log(alunos);

console.log(alunos.indexOf("Diego")); //Retorna o inice do array
console.log(alunos.indexOf("Paula"));

console.log(alunos.includes("Paula"));
console.log(alunos.includes("Carla"));