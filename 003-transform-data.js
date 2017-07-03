function transform(data) {
    return data.reduce((acc, curr) => {

        acc[curr[0]] = acc[curr[0]] || [];
        acc[curr[0]][0] = acc[curr[0]][0] || 0;
        acc[curr[0]][1] = acc[curr[0]][1] || 0;

        if (curr[1] === 'buy') acc[curr[0]][0] += curr[2];
        if (curr[1] === 'sell') acc[curr[0]][1] += curr[2];

        return acc;
    }, {});
}

const data = [
    ['usd', 'buy', 10],
    ['usd', 'buy', 20],
    ['usd', 'sell', 30],
    ['usd', 'sell', 40],

    ['eur', 'buy', 50],
    ['eur', 'buy', 60],
    ['eur', 'sell', 70],
    ['eur', 'sell', 80]
];

transform(data); // {eur: [110, 150], usd: [30, 70]}