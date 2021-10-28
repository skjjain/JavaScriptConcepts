//write a function that can work like sum(1,2,3)(2)(3)()

////////// Example 1
(function () {
    function sum(a, b) {
    return a + b;
    }

    function curry(fn) {
    return function (a) {
        return function (b) {
            return fn.apply(null, [a, b]);
        };
    };
    }

    let curried = curry(sum);

    console.log("Example 1 =>", curried(1)(2));
}());

////////// Example 2
(function () {
    function sum(...args) {
        return args.reduce((i, o) => i + o);
    }

    function curry(fn) {
        return function (...a) {
            return function (...b) {
                return fn.apply({}, [...a, ...b]);
            };
        };
    }

    let curried = curry(sum);

    console.log("Example 2 =>", curried(1, 4)(2));
}());

////////// Example 3
(function () {
    function sum(...args) {
        return args.reduce((i, o) => i + o);
    }
    function curry(func) {
        function curried(...args) {
            if (args.length >= func.length) { // (1)
              return func.apply(this, args);
            } else {
              return function(...args2) { // (2)
                return curried.apply(this, args.concat(args2));
              }
            }
          };
    }
    let curriedSum = curry(sum);
    console.log("Example 3 =>", curriedSum(1, 4)(2)(4, 6, 3)());
}());