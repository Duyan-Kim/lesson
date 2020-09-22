const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result1 = arr1.reduce((prev, curr) => prev + curr, 0);
console.log(result1);

const arr2 = [1, 2, 3, 4, 5];
const result2 = arr2.map((item) => item * 100);
console.log(result2);

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result3 = arr3
  .filter((item) => item % 2 === 0)
  .reduce((prev, curr) => prev + curr, 0);
console.log(result3);

const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result4 = arr4
  .map((item) => item * 5)
  .filter((item) => item >= 30)
  .join("과");
console.log(result4);
