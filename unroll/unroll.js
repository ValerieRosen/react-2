function unroll(squareArray) {
  const rollSize = squareArray.length;
  const result = [];
  //   const square = [
  //     [1, 2, 3, 4],
  //     [5, 6, 7, 8],
  //     [9, 10, 11, 12],
  //     [13, 14, 15, 16],
  //   ];

  //take in a square array and return a single array obtaining
  //values by traversing square in a spiral
  //should return [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]

  for (let i = 0; i < Math.floor(rollSize / 2); i++) {
    let top = i;
    let left = i;
    let bottom = rollSize - i - 1;
    let right = bottom;

    //Increment from left to right
    for (let x = left; x < right; x++) {
      result.push(squareArray[top][x]);
    }

    //Increment from top corner continuing down
    for (let y = top; y < bottom; y++) {
      result.push(squareArray[y][right]);
    }

    //Increment from lower right back to the left
    for (let x = right; x > left; x--) {
      result.push(squareArray[bottom][x]);
    }

    //Increment from bottom left back to top
    for (let y = bottom; y > top; y--) {
      result.push(squareArray[y][left]);
    }
  }

  //Depending on size of roll handle for odd numbers
  if (rollSize % 2 !== 0) {
    let index = Math.floor(rollSize / 2);
    result.push(squareArray[index][index]);
  }

  return result;
}

module.exports = unroll;
