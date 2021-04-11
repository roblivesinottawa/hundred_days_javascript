nums = [10, 20, 30 ,40 ,50 , 60, 70, 80]

nums.push(90, 100) // add numbers to the end of the array
nums.unshift(1,2,3,4,5,6,7,8,9) // add numbers to the beginning of the array
// nums.shift() // removes the first number in the array
nums.splice(0, 0, 0) // location - _ - number to inserted

console.log(nums)

nums.pop()
nums.pop()
nums.shift()

console.log(nums)

nums[0] = 1

console.log(nums)