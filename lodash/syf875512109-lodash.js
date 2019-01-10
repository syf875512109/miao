var syf875512109 = (function(){

  function compact(array, size=1) {
    let arr = [];
    let temp;
    let j = 0;
    for(let i = 0; i < array.length; i++) {
      temp = array[i];
      if (!isNaN(temp) && !(temp == false && (!temp != false))) {
        arr[j++] = temp;
      }
    }
    return arr;
  }


  return {
    compact: compact,
  }
})()