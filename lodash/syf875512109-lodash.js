var syf875512109 = (function(){

  function chunk(array, size = 1) {
    let result = [];
    let current = [];

    for (let i = 0; i < array.length; i++) {
      current.push(array[i]);

      if (current.length == size) {
        result.push(current);
        current = [];
      }
    }

    if (result.length != 0)
      result.push(current);

    return result;
  }
  function compact(array, size=1) {
    let arr = [];
    let temp;
    let j = 0;
    for(let i = 0; i < array.length; i++) {
      temp = array[i];
      if (!temp) {
        arr[j++] = temp;
      }
    }
    return arr;
  }

  function concat(array, ...rest) {
    let result = [];
    array.forEach( it => {
      result.push(it);
    });

    rest.forEach(it => {
      if (Array.isArray(it)) {
        it.forEach(item => {
          result.push(item);
        })
      }else {
        result.push(it);
      }
    })

    return result;
  }

  function difference(array, rest) {
    let result = [];
    array.forEach(it => {
      if (!rest.includes(it)) {
        result.push(it);
      }
    })

    return result;
  }
  return {
    compact: compact,
    chunk: chunk,
  }
})()