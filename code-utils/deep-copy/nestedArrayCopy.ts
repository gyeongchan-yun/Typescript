export function nestedArrayCopy(array: any) {
  if (Array.isArray(array)) {
    let copyArray = array.slice(0);
    for (let i = 0; i < copyArray.length; i++ ) {
      copyArray[i] = nestedArrayCopy(copyArray[i]);
    }
      return copyArray;
  } else {
      return array;
  }
}
