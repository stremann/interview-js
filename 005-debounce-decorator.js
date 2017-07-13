function debounce(callback, delay, context = this) {
    let timeout = null;
    let callbackArgs = null;

    const later = () => callback.apply(context, callbackArgs);

    return function () {
        callbackArgs = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(later, delay)
    }
}

const debounced = debounce(() => { console.log('debounce'); }, 1000);

// These will log 'debounce' 1 time after 1 + 2 seconds delay
setTimeout(debounced, 2000);