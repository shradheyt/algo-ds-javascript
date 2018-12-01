/* 
    Find odds and return array using pure recursion
*/

collectOdds = function(numArray) {
    let array = [];
    if(numArray.length === 0) return array;
    if(numArray[0] % 2 !== 0) array.push(numArray[0]);

    array = array.concat(collectOdds(numArray.slice(1)));

    return array;
}

module.exports = collectOdds;
