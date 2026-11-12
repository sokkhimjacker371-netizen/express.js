// commonsJS Style

let exchange_rate = 4035;


function toKhr(amount, rate) {
    return Math.ceil((amount * rate) / 100) * 100
}

function currencyFormat(amount, currency_code = 'usd'){
    if (currency_code === 'usd'){
        return `$${amount.toLocaleString()}`
    }else if(currency_code === 'khr'){
        return `${amount.toLocaleString()}៛`
    }else {
        return `invalid currency code!`
    }
}

module.exports = {
    toKhr,
    currencyFormat,
    exchange_rate
}


//ES Module Style
// export let exchange_rate = 4035;
// export function toKhr(amount, rate) {
//     return Math.ceil((amount * rate) / 100) * 100
// }
// export function currencyFormat(amount, currency_code = 'usd'){
//     if (currency_code === 'usd'){
//         return `$${amount.toLocaleString()}`
//     }else if(currency_code === 'khr'){
//         return `${amount.toLocaleString()}៛`
//     }else {
//         return `invalid currency code!`
//     }
// }
