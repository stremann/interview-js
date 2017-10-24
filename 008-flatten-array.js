function flattenRecursive(data) {
    return data.reduce((acc, curr) => acc.concat(Array.isArray(curr) ? flattenRecursive(curr) : curr), []);
}

function flattenNotRecursive(data) {
    let clone = data.slice();
    const flat = [];
    while (clone.length) {
        const el = clone.shift();
        Array.isArray(el) ? clone = el.concat(clone) : flat.push(el);
    }
    return flat;
}

const data = [1, 2, [3, 4, [5, 6, [7, 8, 9, [10, 11], 12], 13], [14, 15], 16], 17];

flattenRecursive(data); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
flattenNotRecursive(data); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
