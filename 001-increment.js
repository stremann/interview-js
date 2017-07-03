const increment = (function () {
    let n = 0;

    return function () {
        n += 1;

        return n;
    }
}());

increment(); // 1
increment(); // 2
increment(); // 3