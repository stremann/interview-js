function invoker(fn, args) {
    const params = fn
        .toString()
        .match(/\((.+?)\)/)[1]
        .split(', ')
        .map(param => args[param]);
    return fn.apply(fn, params);
}

invoker(function(a, b, c, d) {}, {a: 1, b: 2, d: 4}); // as function(1, 2, undefined, 4)
