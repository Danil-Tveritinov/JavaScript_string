// Просто, учитывая строку слов, вернуть длину кратчайшего
// слова (слов). Строка никогда не будет пустой, и вам не
// нужно учитывать разные типы данных.

// const str = 'Сегодня я вышел на улицуeeeeee светило солнце'

function longestWord(string) {
    let str = string.split(" ");
    let longest = 0;
    let word = null;
    str.forEach(function(str) {
        if (longest < str.length) {
            longest = str.length;
            word = str;
        }
    });
    return word;
}
console.log(longestWord(str));