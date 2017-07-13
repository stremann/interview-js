// Callbacks (ES5)
getData(a => {
    getMoreData(a, b => {
        getMoreData(b, c => {
            getMoreData(c, d => {
                getMoreData(d, e => {
                    console.log(e);
                })
            })
        })
    })
});

// Promises (ES6)
getData()
    .then(a => getMoreData(a))
    .then(b => getMoreData(b))
    .then(c => getMoreData(c))
    .then(d => getMoreData(d))
    .then(e => console.log(e));

// Async/await (ES7)
(async () => {
    const a = await getData();
    const b = await getMoreData(a);
    const c = await getMoreData(b);
    const d = await getMoreData(c);
    const e = await getMoreData(d);
    console.log(e);
})();

function getData() {}
function getMoreData() {}