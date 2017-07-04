function throttle(fn, period) {
    let called;
  
    return function() {
        if (called) return;
        called = true;
        setTimeout(() => called = false || fn(), period);
    }
}

function sayHello() {
    console.log('Hello');
}

const throttledHello = throttle(sayHello, 2000);

throttledHello();
throttledHello();
throttledHello(); // logged 'Hello' one time, agter 2 seconds