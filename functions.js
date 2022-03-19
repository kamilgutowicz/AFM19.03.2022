const sayHello = () => {return "Hello"};//zwraca nam console log
const sayHello2 = () => "Hello2"; //zwraca nam console log
function sayHello3() {

return "hello"

} //zwraca nam console log

console.log(sayHello() + ", Kamil")
console.log(sayHello2() + ", Kamil")
console.log(sayHello3() + ", Kamil")





module.exports = {
    sayHello,
    sayHello2,
};
console.log("plik functions został załadowany prawidlowo")