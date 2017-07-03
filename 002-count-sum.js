function count(x) {

    function f(y) {
        x += y;
        return f;
    }

    f.valueOf = function () {
        return x;
    };

    return f;
}

count(1); // 1
count(1)(2); // 3
count(1)(2)(3); // 6