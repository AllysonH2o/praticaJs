showPrimes(20);

function showPrimes(limit) {
    for (let number = 1; number <= limit; number++){
        let prime = isPrisme(number);

        if(prime) console.log(number);
    }        
}

function isPrisme(number) {
    for(let i = 2; i < number; i++){
        if(number % i === 0)
            return false;
    }
    return true;
}