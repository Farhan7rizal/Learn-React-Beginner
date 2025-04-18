console.log("apiKey");

function transformToObjects(numberArray) {
  // Todo: Add your logic

  const trans = numberArray.map((item) => ({ val: item }));

  // should return an array of objects
  return trans;
}
const transItem = [1, 2, 3];
console.log(transformToObjects(transItem));
