function throttle(callback, limit, context = this) {
    let inThrottle = false;
    let callbackArgs = null;

    const later = () => callback.apply(context, callbackArgs);

    return function () {
        if (!inThrottle) {
            callbackArgs = arguments;
            later();
            inThrottle = true;

            return setTimeout(() => inThrottle = false, limit);
        }
    };
}

const throttled = throttle(() => { console.log('throttle'); }, 2000);

// These will log 'throttle' 1 time within 2 seconds limit
throttled();
throttled();
throttled();
throttled();
throttled();