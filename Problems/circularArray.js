/**
 * Given a circular array of relative indices, find out if there is a complete cycle. Each cell
 * points relatively to another cell (e.g., -1 to the previous cell, 2 to the second next cell and 0
 * to the same cell). A complete cycle corresponds to visiting all the cells, only once each.
 *
 * Example:
 *   [2, 2, -1] --> true
 *   [2, 2, 0] --> false
 *   [0] --> true
 *   [1, -1] --> true
 */
    /**
     * Let n = length(arr).
     * Time complexity:  O(n)
     * Space complexity: O(1)
     */
    function isCircularArray(arr) {
      let lenth = arr.length;
      let index = 0;
      for(let i = 0; i < lenth; i++) {
        // JS handling for negative numbers % operator
        // https://stackoverflow.com/questions/4467539/javascript-modulo-gives-a-negative-result-for-negative-numbers
        index = ((index + arr[index]) % lenth + lenth) % lenth;
        if(index == 0 && i < lenth - 1) {  // if we arive to 0 too early
          return false;
        }
      }
      return index == 0;  // are we back to the original cell after 'lenth' steps
    }

console.log(isCircularArray([2, 2, -1])); // true
console.log(isCircularArray([2, 2, 0])); // false
console.log(isCircularArray([0])); // true
console.log(isCircularArray([1, -1])); // true