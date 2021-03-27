console.log('hello');
// работа с значениями, получающими NaN
const my = function (a = 0, b = 0) {
    // чтобы вычленить цифры в начале строки и переделать в номер
    a = parseFloat(a);
    b = parseFloat(b);
    console.log(a, b);
    // let result;
    if (isNaN(a) || isNaN(b)) {
           return "вы ввели не то";
    } else {
        return a + b;
     
    }
}
console.log(my("12fjjgg", "12jbndjfndjfd"));

const me = function (c, j) {

    if (isNaN(c) || isNaN(j)) {
        return "вы ввели не то";
    }
    return "hi";
}
console.log(me("12jjkbhljl", 7));