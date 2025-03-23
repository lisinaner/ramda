// 1.ts
import { lift } from "ramda";

// source/internal/_isFunction.js
function _isFunction(x) {
  var type = Object.prototype.toString.call(x);
  return type === "[object Function]" || type === "[object AsyncFunction]" || type === "[object GeneratorFunction]" || type === "[object AsyncGeneratorFunction]";
}

// 1.ts
import { curry } from "ramda";
{
  and = curry(function and(a, b) {
    return a && b;
  });
  const both = curry((a, b) => {
    return _isFunction(a) ? function _both() {
      return a.apply(this, arguments) && b.apply(this, arguments);
    } : lift(and)(a, b);
  });
  console.log(both([true])([true, false]));
}
var and;
