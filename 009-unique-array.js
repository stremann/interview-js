function unique(data) {
    return data.filter((el, i) => data.indexOf(el) === i);
}

unique([1, 2, 2, 2, 3]); // [1, 2, 3]

// alternative solution in ES6
[...new Set([1, 2, 2, 2, 3])]; // [1, 2, 3]
