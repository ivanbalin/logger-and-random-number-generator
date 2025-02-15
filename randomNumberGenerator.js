function randomGenerator(min, max){
    return function() {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

const randomNumberGenerator = randomGenerator(1, 100)

console.log(randomNumberGenerator());