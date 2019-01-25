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

    if (current.length != 0)
      result.push(current);

    return result;
  }
  function compact(array, size=1) {
    let arr = [];
    let temp;
    let j = 0;
    for(let i = 0; i < array.length; i++) {
      temp = array[i];
      if (temp) {
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

  function drop(array, num = 1) {
    let result = array.slice();
    for(let i = 0; i < num && result.length != 0; i++) {
      result.shift();
    }
    return result;
  }

  function dropRight(array, num = 1) {
    let result = array.slice();
    let i = 0; i < num && result.length != 0; i++) {
      result.pop();
    }

    return result;
  }

  function dropRightWhile(array, action) {
    let result = array.slice();
    for(let i = result.length - 1; i >= 0; i--) {
      if (action(result[i])) {
        result.pop();
      }else {
        break;
      }
    }
    return result;
  }

  function dropWhile(array, action) {
    let result = array.slice();
    for(let i = 0; i < result.length; i++) {
      if (action(result[i])) {
        result.shift();
      }else {
        break;
      }
    }
    return result;
  }

  function fill(array, value, start = 0, end = array.length) {
    if (end > array.length) {
      end = array.length;
    }
    if (start < 0) {
      start = 0;
    }
    for(let i = start; i < end; i++) {
      array[i] = value;
    }
    return array;
  }

  function findIndex(array, action, fromIndex = 0) {
    for (let i = fromIndex; i < array.length; i++) {
      if (action(array[i])) {
        return i;
      }
    }
    return -1;
  }

  function head(array) {
    return array[0];
  }

  function indexOf(array, value, fromIndex = 0) {
    for (let i = fromIndex; i < array.length; i++) {
      if (array[i] == value) {
        return i;
      }
    }
    return -1;
  }

  function flatten(array) {
    let result = [];

    for (let val of array) {
      if (Array.isArray(val)) {
        val.forEach(item => {
          result.push(item);
        });
      }else {
        result.push(val);
      }
    }

    return result;
  }

  function flattenDeep(array, result = []) {
    array.forEach(it => {
      if (Array.isArray(it)) {
        flattenDeep(it, result);
      }else {
        result.push(it);
      }
    });
    return result;
  }

  function flattenDepth(array, depth = 1, result = []) {
    if (depth < 0) {
      result.push(array);
      return result;
    }
    array.forEach(it => {
      if (Array.isArray(it)) {
        flattenDepth(it, depth - 1, result);
      }else {
        result.push(it);
      }
    });
    return result;
  }
  return {
    compact: compact,
    chunk: chunk,
    concat: concat,
    difference: difference,
    drop: drop,
    dropRight: dropRight,
    dropRightWhile: dropRightWhile,
    dropWhle: dropWhile,
    fill: fill,
    findIndex: findIndex,
    head: head,
    indexOf: indexOf,
    flatten: flatten,
    flattenDeep: flattenDeep,
    flattenDepth: flattenDepth,
  }
})()