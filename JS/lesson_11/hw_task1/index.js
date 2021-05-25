function splitString(str, num = 10) {
  if (typeof str !== 'string') {
    return null;
  } else {
    const strArr = [];
    let startPosition = 0;

    while (true) {
      let chunk = str.substr(startPosition, num);
      if (chunk.length === 0) {
        break;
      }
      strArr.push(chunk);
      startPosition += num;
    }
    strArr[strArr.length - 1] = strArr[strArr.length - 1].padEnd(num, '.');
    return strArr;
  }
}

console.log(splitString('dfalihcukghdfjkahgbakjhglvkachbgv'));
