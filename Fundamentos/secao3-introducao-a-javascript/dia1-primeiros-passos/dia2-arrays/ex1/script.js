let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0
let highestNumber = 0
let impar = 0
for (let index = 0; index < numbers.length; index++) {
    if(numbers[index]%2 !== 0){
        impar++
    }
    console.log(numbers[index]);
    soma = soma+numbers[index]
    
}
let media = soma / numbers.length
console.log(`a soma é ${soma}`);
console.log(`a media é ${media}`);
if (media>20) {
    console.log(`Media é maior que 20`);
    
} else{
    console.log(`valor menor ou igual a 20`);
}
for (let index = 0; index <numbers.length; index++) {
    if(numbers[index]>highestNumber){
        highestNumber = numbers[index]
    }    
}
console.log(highestNumber);
console.log(`Tem ${impar} numeros impares`);