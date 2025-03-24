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

// source/internal/_curry2.js
function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1:
        return _isPlaceholder(a) ? f2 : _curry1(function(_b) {
          return fn(a, _b);
        });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function(_a) {
          return fn(_a, b);
        }) : _isPlaceholder(b) ? _curry1(function(_b) {
          return fn(a, _b);
        }) : fn(a, b);
    }
  };
}

// source/internal/_isArray.js
var _isArray_default = Array.isArray || function _isArray(val) {
  return val != null && val.length >= 0 && Object.prototype.toString.call(val) === "[object Array]";
};

// source/internal/_isTransformer.js
function _isTransformer(obj) {
  return obj != null && typeof obj["@@transducer/step"] === "function";
}

// source/internal/_dispatchable.js
function _dispatchable(methodNames, transducerCreator, fn) {
  return function 匿名函数() {
    if (arguments.length === 0) {
      return fn();
    }
    var obj = arguments[arguments.length - 1];
    if (!_isArray_default(obj)) {
      var idx = 0;
      while (idx < methodNames.length) {
        if (typeof obj[methodNames[idx]] === "function") {
          return obj[methodNames[idx]].apply(obj, Array.prototype.slice.call(arguments, 0, -1));
        }
        idx += 1;
      }
      if (_isTransformer(obj)) {
        var transducer = transducerCreator.apply(null, Array.prototype.slice.call(arguments, 0, -1));
        return transducer(obj);
      }
    }
    return fn.apply(this, arguments);
  };
}

// source/internal/_reduced.js
function _reduced(x) {
  return x && x["@@transducer/reduced"] ? x : {
    "@@transducer/value": x,
    "@@transducer/reduced": true
  };
}

// source/internal/_xfBase.js
var _xfBase_default = {
  init: function() {
    return this.xf["@@transducer/init"]();
  },
  result: function(result) {
    return this.xf["@@transducer/result"](result);
  }
};

// source/internal/_xfind.js
function XFind(f, xf) {
  this.xf = xf;
  this.f = f;
  this.found = false;
}
XFind.prototype["@@transducer/init"] = _xfBase_default.init;
XFind.prototype["@@transducer/result"] = function(result) {
  if (!this.found) {
    result = this.xf["@@transducer/step"](result, undefined);
  }
  return this.xf["@@transducer/result"](result);
};
XFind.prototype["@@transducer/step"] = function(result, input) {
  if (this.f(input)) {
    this.found = true;
    result = _reduced(this.xf["@@transducer/step"](result, input));
  }
  return result;
};
function _xfind(f) {
  return function(xf) {
    return new XFind(f, xf);
  };
}

// source/find.js
var find = _curry2(_dispatchable(["find"], _xfind, function find2(fn, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    if (fn(list[idx])) {
      return list[idx];
    }
    idx += 1;
  }
}));
var find_default = find;

// 1.ts
import { identity } from "ramda";
var listXf = {
  "@@transducer/init": () => [],
  "@@transducer/step": (acc, x) => {
    return acc.concat([x]);
  },
  "@@transducer/result": (x) => x
};
var r = find_default(identity, listXf);
console.log(r);


let r2