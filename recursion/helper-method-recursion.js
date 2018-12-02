/* 
    Find odds and return array using helper method recursion
*/

collectOdds = function(numArray) {
    let array = [];

    function helper(input) {
        if(input.length === 0) return;
        if(input[0] % 2 !== 0) array.push(input[0]);
        return helper(input.slice(1));
    }

    helper(numArray);

    return array;
}

module.exports = collectOdds;
