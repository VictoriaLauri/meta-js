function add (a, b) {
    try {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new ReferenceError('Invalid input');
            } else {
                console.log(a + b);
            }
        } catch (e) {
            console.log("Error:", e);
        }
}

add(1, "2");
console.log("Code still running...");
