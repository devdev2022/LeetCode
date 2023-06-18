/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    let carry; 
    while (a !== 0) {
        carry = a & b;
        b = a ^ b;
        a = carry << 1;
    }
    return b;
};