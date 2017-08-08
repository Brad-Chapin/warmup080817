function reverse (arr) {
  let revArr = [];
  for (let i = 0; i < arr.length; i++) {
    revArr.unshift(arr[i]);
  }
  console.log(revArr);
}
function revInPlace(arr) {
  let len = Math.floor(arr.length/2);
  for (let i = 0; i < len; i++) {
    [arr[i], arr[arr.length -1 -i]] = [arr[arr.length -1 -i], arr[i]];
  }
  console.log(arr);
}
// reverse([1,2,3,4,5,6]);
revInPlace([1,2,3,4,5,6]);
