console.log("text");

console.log("Task 1");
for (let i = 1; i <= 10; i++) {
    console.log(i * i);
}
console.log("Task 2")
for (let i = 5; i >= 1; i--) {
    console.log(i);
}
console.log("Blastoff");
console.log("Task 3")
for (let i = 0; i <= 50; i = i + 2) {
    console.log(i);
}
console.log("Task 4")
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}
console.log(sum);

console.log("Task 5")
let numbersFactorial = 1;
for (let i = 1; i <= 10; i++) {
    numbersFactorial = numbersFactorial * i
    console.log(numbersFactorial);

}
console.log("Task 6")
let arr = [3, 1, 4, 1, 5];
for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    console.log(element);
}
console.log("Task 7")
for (let i = 0; i < arr.length; i++){
    let sequence = arr.at(-1*i-1)
    console.log(sequence)
}
console.log("Task 8")
let cubeNumbers = []
for (let i = 1; i <=10; i++){
    cubeNumbers.push(i ** 3);
}
console.log(cubeNumbers);

console.log("Task 9")
let fibonacciArray = [];
let a = 0, b = 1
for (let i = 0; i < 10; i++){
    fibonacciArray.push(a);
    let nextNumber = a + b;
    a = b;
    b = nextNumber;
}
console.log(fibonacciArray)

console.log("Task 10")
let reverseArray = []
for (let i = arr.length - 1; i >= 0; i--) {
    reverseArray.push(arr[i]);
}
console.log(reverseArray)
