import { deJoaoParaMaria, getJoao, getMaria } from "./src/joaoEMaria";

console. log("MAIN");
let maria = getMaria();
let joao = getJoao();
console.log(maria, joao);

deJoaoParaMaria();

maria = getMaria();
joao = getJoao();
console.log(maria, joao);