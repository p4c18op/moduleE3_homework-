function defineP(num) {
    let isP, result;
    isP = true;

    if (num > 1 && num <= 256) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isP = false;
            }
        }
        result = isP ? 'Число ${num} - простое число' : 'Число ${num} - составное число';
    } else if (num > 256) {
        result = 'Данные неверны';
    }
    return result;
}