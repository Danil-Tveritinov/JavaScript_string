// В этом скрипте вам необходимо создать функцию, 
// которая берет список неотрицательных целых чисел и 
// строк и возвращает новый список с отфильтрованными строками.
// filter_list([1,2,'a','b']) == [1,2] 
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123])== [1,2,123]



const words = [1, 2, 'a', 'b'];
const words2 = [1,'a', 'b', 0, 15]
const words3 = [1, 2, 'aasf', '1', '123', 123]

function filter_list(l) {
  return l.filter(function(i){
    if (i !== String(i)) return i;
  })
}

console.log(filter_list(words).valueOf());
console.log(filter_list(words2).valueOf()); 
console.log(filter_list(words3)); 

