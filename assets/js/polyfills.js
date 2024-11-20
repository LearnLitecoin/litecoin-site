// Array.prototype.includes polyfill for older browsers
if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', {
        value: function(valueToFind, fromIndex) {
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }
            var o = Object(this);
            var len = o.length >>> 0;
            if (len === 0) {
                return false;
            }
            var n = fromIndex | 0;
            var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
            function sameValueZero(x, y) {
                return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
            }
            while (k < len) {
                if (sameValueZero(o[k], valueToFind)) {
                    return true;
                }
                k++;
            }
            return false;
        }
    });
}

// Fetch polyfill
if (!window.fetch) {
    window.fetch = function(url, options) {
        // Implement a basic fetch polyfill here or use a library like fetch-ie8
        // This is just a placeholder, actual implementation would be much more complex
        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(options.method || 'GET', url, true);
            xhr.onload = function() {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.responseText);
                } else {
                    reject(xhr.statusText);
                }
            };
            xhr.onerror = function() { reject(xhr.statusText); };
            xhr.send(options.body);
        });
    };
}
