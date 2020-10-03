class Fibonacci {
    getFibonacciValue(n, a = 1, b = 0) {
            if (n === 0) {
                return b;
            } else {
                return getFibonacciValue(n - 1, b, a + b);
            }
    } 
}