function range (start, end) {
  let nums = [];
  for (let i = start; i <= end; i++) {
    nums.push(i);
  }
  return nums;
}

function sum (nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++){
    total += nums[i];
  }
  console.log(total);
}

sum(range(1,10));
