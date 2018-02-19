function filterByArray(array, filter) {
    return array.filter(el => !filter.includes(el));
}

filterByArray([1, 2, 3, 4, 5], [1, 3, 5]); // [2, 4]
