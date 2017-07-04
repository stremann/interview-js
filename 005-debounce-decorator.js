function debounce(fn, timeout) {
    const timer;
  
    return function() {
       clearTimeout(timer);
       timer = setTimeout(fn, timeout);
    }
}

function sayHello() {
    console.log('Hello');
}

const debouncedHello = debounce(sayHello, 2000);

debouncedHello();
setTimeout(debouncedHello, 1000); // logged one time 'Hello' after 3 seconds