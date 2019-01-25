var syf875512109 = (function(){

  function property(str) {
    return function(obj) {
      return obj[str];
    }
  }

  function matches(arr) {
    return function(obj) {
      return obj[arr[0]] === arr[1];
    }
  }

  function matchProperty(m) {
    return function(obj) {
      for (let key in m) {
        if (obj[key] != m[key]) {
          return false;
        }
      }
      return true;
    }
  }
  function retAction(action) {
    if (typeof action === 'string') {
      return property(action);
    }else if (Array.isArray(action)) {
      return matches(action);
    }else if (typeof action === 'object') {
      return matchProperty(action);
    }

    return action;
  }
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

  function difference(array, ...rest) {
    let result = [];
    let flag;
    array.forEach(it => {
      flag = 1;
      for (let item = 0; item < rest.length; item++) {
        if (rest[item].includes(it)) {
          flag = 0;
          break;
        }
      }
      if (flag) {
        result.push(it);
      }
    });

    return result;
  }

  function drop(array, num = 1) {
    let result = array.slice();
    let count = 0;
    for(let i = 0; count < num && result.length != 0; i++) {
      result.shift();
      i--;
      count++;
    }
    return result;
  }

  function dropRight(array, num = 1) {
    let result = array.slice();
    for (let i = 0; i < num && result.length != 0; i++) {
      result.pop();
    }

    return result;
  }

  function dropRightWhile(array, action) {
    let result = array.slice();
    action = retAction(action);
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
    action = retAction(action);
    for(let i = 0; i < result.length; i++) {
      if (action(result[i])) {
        result.shift();
        i--;
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
    action = retAction(action);
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

  function findLastIndex(array, action, fromlastIndex = array.length - 1) {
    action = retAction(action);
    for (let i = fromlastIndex; i >= 0; i--) {
      if (action(array[i])) {
        return i;
      }
    }
    return -1;
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

  function fromPairs(pairs) {
    let m = {};
    for (let items of pairs) {
      m[items[0]] = items[1];
    }
    return m;
  }

  function initial(array) {
    return array.map(it => it).splice(0, array.length - 1);
  }

  function intersection(...arrays) {
    let result = [];
    let flag = 1;

    arrays[0].forEach(item => {
      for (let it = 1; it < arrays.length; it++) {
        flag = 1;
        if (arrays[it].includes(item)) {
          flag = 0;
          break;
        }
      }
      if (!flag) {
        result.push(item);
      }
    });

    return result;
  }

  function intersectionBy(...arrays) {
    var action = retAction(arrays[arrays.length - 1]);
    var arrays = arrays.slice(0, arrays.length - 1);

    let result = [];
    let flag = 1;

    arrays[0].forEach(item => {
      items = action(item);
      for (let it = 1; it < arrays.length; it++) {
        flag = 1;
        if (arrays[it].map(sm => action(sm)).includes(items)) {
          flag = 0;
          break;
        }
      }
      if (!flag) {
        result.push(item);
      }
    });

    return result;
  }

  function join(array, str) {
    let s = '';
    let flag = 1;
    for (let val of array) {
      if (flag == 1) {
        s += val;
        flag = 0;
      }else {
        s += str + val;
      }
    }
    return s;
  }

  function last(array) {
    return array[array.length - 1];
  }

  function lastIndexOf(array, value, lastIndex = array.length - 1) {
    for (let i = lastIndex; i >= 0; i--) {
      if (array[i] == value) {
        return i;
      }
    }
    return -1;
  }

  function nth(array, n = 0) {
    if (n < 0) {
      n = array.length + n;
    }
    return array[n];
  }

  function pull(array, ...values) {
    let result = [];
    array.forEach(item => {
      if (!values.includes(item)) {
        result.push(item);
      }
    });

    return result;
  }

  function pullAll(array, values) {
    let result = [];
    array.forEach(item => {
      if (!values.includes(item)) {
        result.push(item);
      }
    });

    return result;
  }

  function pullAllBy(array, values, action) {
    action = retAction(action);
    let result = [];
    array.forEach(item => {
      let flag = 1;
      for (let i = 0; i < values.length; i++) {
        if (action(item) == action(values[i])) {
          flag = 0;
          break;
        }
      }
      if (flag) {
        result.push(item);
      }
    });

    return result;
  }

  function pullAt(array, rest) {
    let result = [];
    let flag = 0;
    for (let index of rest) {
      result.push(array[index]);
    }
    return result;
  }

  function remove(array, action) {
    action = retAction(action);
    let event = [];
    for (let i = 0; i < array.length; i++) {
      if (action(array[i])) {
        event.push(array.splice(i, 1)[0]);
        i--;
      }
    }
    return event;
  }

  function reverse(array) {
    let result = [];
    for(let index = array.length - 1; index >= 0; index--) {
      result.push(array[index]);
    }
    return result;
  }

  function slice(array, start = 0, end = array.length) {
    let result = [];
    for(let i = start; i < end; i++) {
      result.push(array[i]);
    }
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
    dropWhile: dropWhile,
    fill: fill,
    findIndex: findIndex,
    findLastIndex: findLastIndex,
    head: head,
    indexOf: indexOf,
    flatten: flatten,
    flattenDeep: flattenDeep,
    flattenDepth: flattenDepth,
    fromPairs: fromPairs,
    initial: initial,
    intersection: intersection,
    intersectionBy: intersectionBy,
    join: join,
    last: last,
    lastIndexOf: lastIndexOf,
    nth: nth,
    pull: pull,
    pullAll: pullAll,
    pullAllBy: pullAllBy,
    pullAt: pullAt,
    remove: remove,
    reverse: reverse,
    slice: slice,
  }
})()