var str = prompt("Ваша строка/слово:");
function correct(str)
{
   var num1 = str[0];
   var num2 = str.substring(1, str.length);

    return num1.toUpperCase() + num2.toLowerCase();
}
console.log(correct(str));