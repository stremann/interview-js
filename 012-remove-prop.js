const removeProp = prop => ({ [prop]: _, ...rest }) => rest;
//                 ----       ------
//                      \   /
//               dynamic destructuring

const user = {
    id: 1234,
    name: 'John Smith',
    pass: 'Password!'
};

const removePass = removeProp('pass');

removePass(user); // { id: 1234, name: 'John Smith' }
