// Ваша задача — завершить функцию, которая принимает 
// строку и возвращает массив со всеми возможными 
// поворотами данной строки в верхнем регистре.
// scrollingText("code")
// [‘CODE’, ‘OCDE’, ‘EDCO’, …]


function leftrotate(str1, n)
{
    str1 = str1.toUpperCase();
    var temp = str1 + str1;
    var l1 = str1.length;
     
    var Lfirst = temp.substr(n,l1);

    return Lfirst;
}
 
function rightrotate(str, d)
{
    return leftrotate(str, str.length - d);
}

var str1 = "code";
console.log(leftrotate(str1, 2));
 
