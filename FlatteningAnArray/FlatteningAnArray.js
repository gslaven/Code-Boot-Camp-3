console.log(`FlattenArrayFlatteningAnArray.js loaded`)
let array = [[1,2,[3]],4];
let result = [];

FlattenArray = (argArray) =>
{
  for (let i = 0; i < argArray.length; i++) {
    if (Array.isArray(argArray[i])) {
      FlattenArray(argArray[i]);
    } else {
      result.push(argArray[i]);
    }
  }
  console.log(result);
}

FlattenArray(array);
