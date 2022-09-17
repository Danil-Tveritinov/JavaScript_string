// Возвращает количество (количество) гласных в заданной 
// строке. Мы будем рассматривать a, e, i, o, u как гласные 
// для этой Ката (но не y). Входная строка будет состоять 
// только из строчных букв и/или пробелов.

const arr = 'K, t, a,a, e, i, o, u'
const countVowels = str => Array.from(str)

.filter(letter => 'aeiou'.includes(letter)).length;


console.log(countVowels(arr)); 


