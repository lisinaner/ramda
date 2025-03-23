// source/internal/_isPlaceholder.js
function _isPlaceholder(a) {
  return a != null && typeof a === "object" && a["@@functional/placeholder"] === true;
}

// source/internal/_curry1.js
function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || _isPlaceholder(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
}

// source/internal/_reduced.js
function _reduced(x) {
  return x && x["@@transducer/reduced"] ? x : {
    "@@transducer/value": x,
    "@@transducer/reduced": true
  };
}

// source/reduced.js
var reduced = _curry1(_reduced);
var reduced_default = reduced;

// 1.ts
{
  let arr = [];
  let r = [1, 100].reduce((lastResult, currentValue) => {
    return currentValue > 3 ? reduced_default(lastResult) : lastResult.concat(currentValue);
  }, arr);
  console.log(r);
}
