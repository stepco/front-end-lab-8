let iterator = 0;
function increaseIteratorBy1(){
    iterator++;
    printIteratorValue();
}
function printIteratorValue(){
    console.log('Iterator value ' + iterator);
}
function debounce (callback, ms){
    let setTime;
    return function (){
      clearTimeout(setTime);
      setTime = setTimeout(callback, ms);
    }
  }
var increaseIterator = debounce(increaseIteratorBy1, 1000);

increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();