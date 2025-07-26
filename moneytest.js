import { formatCurrency } from "../scripts/utils/money.js";
console.log('Test for formatcurrency')
console.log('check for value');
if (formatCurrency(2000) === '20.00'){
    console.log('passed');
}
else{
    console.log('failed');
}
console.log('check for 0');
if (formatCurrency(0) === '0.00'){
    console.log('passed');
}
else{
    console.log('failed');
}
console.log('Test for ')